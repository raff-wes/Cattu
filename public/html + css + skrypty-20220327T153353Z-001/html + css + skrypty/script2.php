<?php

	$tytul = $_POST["tytul"];
	
	/* Tutaj chcemy żeby skrypt wysyłał dane do bazy, żeby móc je później pobrać
		ta strona nie wyświetli się ani nie będzie w historii użytkownika
	*/
	
	header("Location: index.html");
	
?>
