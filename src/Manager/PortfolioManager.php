<?php

namespace App\Manager;

use App\Enum\PortfolioEnum;

class PortfolioManager {

    public function __construct() {
        // 
    }

    /**
     * @param array json content
     * @return array fields
     */
    public function checkFields(array $jsonContent) {
        $fields = [];
        $allowedFields = PortfolioEnum::getAvailableChoices();

        foreach($jsonContent as $fieldName => $fieldValue) {
            if(in_array($fieldName, $allowedFields)) {
                continue;
            }

            if($fieldName == "") {
                // 
            }

            $fields[$fieldName] = $fieldValue;
        }

        return $fields;
    }

    /**
     * @param array fields
     * @param ?Portfolio portfolio
     * @return Portfolio|string
     */
    public function fillPortfolio(array $fields, /*?Portfolio $portfolio = new Portfolio()*/) {
        $currentTime = new \DateTimeImmutable();
        
        try {
            foreach($fields as $fieldName => $fieldValue) {
                if($fieldName == "") {}
            }
        } catch(\Exception $e) {
            return $e->getMessage();
        }
    }
}