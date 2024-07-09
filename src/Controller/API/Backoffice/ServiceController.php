<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

#[Route('/api/backoffice', name: 'api_backoffice_')]
class ServiceController extends AbstractController
{
    #[Route('/service', name: 'post_service', methods: ["POST"])]
    public function post_services(): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/service/{serviceID}/update', name: 'update_service', methods: ["UPDATE", "PUT"])]
    public function update_service(int $serviceID): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
    
    #[Route('/service/{serviceID}/remove', name: 'remove_service', methods: ["DELETE"])]
    public function remove_service(int $serviceID): JsonResponse {
        return $this->json(["message" => "Route under construction"], Response::HTTP_OK);
    }
}
