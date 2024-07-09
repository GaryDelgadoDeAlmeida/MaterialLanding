<?php

namespace App\Controller\API;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TeamController extends AbstractController
{
    #[Route('/a/p/i/team', name: 'app_a_p_i_team')]
    public function index(): Response
    {
        return $this->render('api/team/index.html.twig', [
            'controller_name' => 'TeamController',
        ]);
    }
}
