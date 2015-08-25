<?php
 @chmod('clicks.php',0777);
 $handle = fopen('clicks.php','r');
 $leitura = fgets($handle);
 fclose($handle);
 if(empty($leitura))
 {
 	$leitura = 0 ;
 }
 $leitura ++;
  if($leitura == 2)
 {
 $leitura = 0 ;
 }
 $handle = fopen('clicks.php','w+');
 fwrite($handle,$leitura);
 fclose($handle);
 if($leitura == 0 )
  {
	header('location:http://tiberio.hypnobox.com.br/atendimento/index.php?id_produto=84&id_parceiro=1&id_canal_origem=6&id_referencia=23');
	exit(0);
  }
 if($leitura == 1 )
  {
  header('location:http://houste.hypnobox.com.br/atendimento/index.php?id_produto=410');
  	exit(0);
  }
?>