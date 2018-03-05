<?php

$connect = mysqli_connect("localhost", "root", "root", "controle");
$output = '';
if(isset($_POST["pValue"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["pValue"]);
 $query = "
  SELECT * FROM empresa 
  WHERE cnpj LIKE '%".$search."%' ";
}

$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
while($row = mysqli_fetch_array($result))
  {
   $output =$row["razao_social"];
  }
  echo $output;
 }
else
{
 echo 'Data Not Found';
}



?>