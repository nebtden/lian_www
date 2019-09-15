<?php
	if( $_POST ){
		$date = date('Y-m-d',time());
		$myfile = fopen("phone-click-".$date.".txt", "a+") or die("Unable to open file!");
		$txt = "1\n";
		fwrite($myfile, $txt);
		fclose($myfile);
	}
	echo true;
?>