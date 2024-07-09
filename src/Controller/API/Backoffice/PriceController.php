<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/backoffice', name: 'api_backoffice_')]
class PriceController extends AbstractController
{
    #[Route('/price', name: 'post_price', methods: ["POST"])]
    public function post_price(Request $request): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/price/{priceID}', name: 'get_price', methods: ["GET"])]
    public function get_price(int $priceID): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/price/{priceID}/update', name: 'update_price', methods: ["UPDATE", "PUT"])]
    public function update_price(int $priceID, Request $request): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/price/{priceID}/remove', name: 'remove_price', methods: ["DELETE"])]
    public function remove_price(int $priceID, Request $request): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
