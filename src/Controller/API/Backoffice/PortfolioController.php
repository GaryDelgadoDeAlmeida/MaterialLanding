<?php

namespace App\Controller\API\Backoffice;

use App\Manager\PortfolioManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/backoffice', name: 'api_backoffice_')]
class PortfolioController extends AbstractController
{
    private PortfolioManager $portfolioManager;

    function __construct(PortfolioManager $portfolioManager) {
        $this->portfolioManager = $portfolioManager;
    }

    #[Route('/portfolio', name: 'post_portfolio', methods: ["POST"])]
    public function post_portfolio(Request $request): JsonResponse {
        $jsonContent = json_decode($request->getContent(), true);
        if(empty($jsonContent)) {
            return $this->json([
                "message" => "An error has been encountered with the sended body"
            ], Response::HTTP_PRECONDITION_REQUIRED);
        }

        try {
            $fields = $this->portfolioManager->checkFields($jsonContent);
            if(empty($fields)) {
                return $this->json([
                    "message" => "An error has been encountered with the sended body"
                ], Response::HTTP_PRECONDITION_REQUIRED);
            }

            $portfolio = $this->portfolioManager->fillPortfolio($fields);
            if(is_string($portfolio)) {
                return $this->json([
                    "message" => $portfolio
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch(\Exception $e) {
            return $this->json([
                "message" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }

        return $this->json($portfolio, Response::HTTP_CREATED);
    }
    
    #[Route('/portfolio/{portfolioID}/update', name: 'update_portfolio', methods: ["UPDATE", "PUT"])]
    public function update_portfolio($portfolioID, Request $request): JsonResponse {
        $jsonContent = json_decode($request->getContent(), true);
        if(empty($jsonContent)) {
            return $this->json([
                "message" => "An error has been encountered with the sended body"
            ], Response::HTTP_PRECONDITION_REQUIRED);
        }

        $portfolio = null;
        if(empty($portfolio)) {
            return $this->json([
                "message" => "The portfolio couldn't be found"
            ], Response::HTTP_NOT_FOUND);
        }

        try {
            $fields = $this->portfolioManager->checkFields($jsonContent);
            if(empty($fields)) {
                return $this->json([
                    "message" => "An error has been encountered with the sended body"
                ], Response::HTTP_PRECONDITION_REQUIRED);
            }

            $portfolio = $this->portfolioManager->fillPortfolio($fields, $portfolio);
            if(is_string($portfolio)) {
                return $this->json([
                    "message" => $portfolio
                ], Response::HTTP_INTERNAL_SERVER_ERROR);
            }
        } catch(\Exception $e) {
            return $this->json([
                "message" => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
        return $this->json($portfolio, Response::HTTP_OK);
    }

    #[Route('/portfolio/{portfolioID}/remove', name: 'remove_portfolio', methods: ["DELETE"])]
    public function remove_portfolio(int $portfolioID) : JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
