<?php
//fetch.php
$connect = mysqli_connect("localhost", "root", "root", "controle");
$output = '';
if(isset($_POST["query"]))
{
 $search = mysqli_real_escape_string($connect, $_POST["query"]);
 $query = "
  SELECT * FROM empresa 
  WHERE cnpj LIKE '%".$search."%'
  OR razao_social LIKE '%".$search."%' 
  OR tipo LIKE '%".$search."%' 
  
 ";
}
else
{
 $query = "
  SELECT * FROM empresa ORDER BY cnpj
 ";
}
$result = mysqli_query($connect, $query);
if(mysqli_num_rows($result) > 0)
{
 $output .= '
  <div class="table-responsive">
   <table class="table table bordered">
    <tr>
     <th>CNPJ</th>
     <th>RAZAO SOCIAL</th>
     <th>TIPO</th>
    </tr>
 ';
 while($row = mysqli_fetch_array($result))
 {
  $output .= '
   <tr>
    <td>'.$row["cnpj"].'</td>
    <td>'.$row["razao_social"].'</td>
    <td>'.$row["tipo"].'</td>
   </tr>
  ';
 }
 echo $output;
}
else
{
 echo 'Data Not Found';
}

?>