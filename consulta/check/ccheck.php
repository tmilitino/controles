<?php

$connect = mysqli_connect("localhost", "root", "root", "controle");
$output = '';
if(isset($_POST["cnp"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["cnp"]);
 $query = "
  SELECT * FROM empresa 
  WHERE cnpj LIKE '%".$search."%' ";
}

$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
while($row = mysqli_fetch_array($result))
  {
   $output =$row["cnpj"];
  }
  echo $output;
 }
else
{
 echo 'Data Not Found';
}



?>