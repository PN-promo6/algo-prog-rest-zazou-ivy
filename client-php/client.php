<?php
$albums = file_get_contents('http://localhost:3001/albums');
echo $albums;
echo "\n";
$members = file_get_contents('http://localhost:3001/members');
echo $members;
echo "\n";
$concertTours = file_get_contents('http://localhost:3001/concertTours');
echo $concertTours;
echo "\n";
$labels = file_get_contents('http://localhost:3001/labels');
echo $labels;
