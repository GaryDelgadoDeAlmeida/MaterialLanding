<?php

namespace App\Controller\API\Backoffice;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class TeamController extends AbstractController
{
    #[Route('/a/p/i/backoffice/team/backoffice', name: 'app_a_p_i_backoffice_team_backoffice')]
    public function index(): Response
    {
        return $this->render('api/backoffice/team_backoffice/index.html.twig', [
            'controller_name' => 'TeamBackofficeController',
        ]);
    }
}
