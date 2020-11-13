<?php
    include("connect.php");
    include("functions.php");

    if(isset($_GET["ID"])) {
        $targetID = $_GET["ID"];
        $result = getSingleThing($pdo, $targetID);

        return $result;
    } else {
        $allUsers = getAllThings($pdo);

        return $allThings;
    }