<?php
//fetch.php
$connect = mysqli_connect("localhost", "root", "root", "controle");
$output = '';
if(isset($_POST["cnp"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["cnp"]);
 $query = "
  SELECT razao_social FROM empresa 
  WHERE cnpj LIKE '%".$search."%' ";
}

$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
 $output .= '
  <h1>'.$row["razao_social"].'</h1>
 ';
 echo $output;
}
else
{
 echo 'Data Not Found';
}

?>