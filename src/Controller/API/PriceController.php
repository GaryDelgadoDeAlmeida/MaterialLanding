<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api', name: 'api_')]
class PriceController extends AbstractController
{
    #[Route('/prices', name: 'get_prices', methods: ["GET"])]
    public function get_prices(): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
