<?php

namespace App\Enum;

abstract class PortfolioEnum {

    protected array $typeName = [];

    public static function getAvailableChoices() {
        return [];
    }

    public static function getChoices() {
        $choices = [];

        foreach(self::getAvailableChoices() as $choice) {
            $choices[self::$typeName[$choice]] = $choice;
        }

        return $choices;
    }
}