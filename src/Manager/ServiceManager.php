<?php

namespace App\Manager;

class ServiceManager {

    /**
     * @param array json content
     * @return array fields
     */
    public function checkFields(array $jsonContent) {
        $fields = [];
        $allowedFields = [];

        foreach($jsonContent as $fieldName => $fieldValue) {
            if(!in_array($fieldName, $allowedFields)) {
                continue;
            }

            $fields[$fieldName] = $fieldValue;
        }

        return $fields;
    }
}