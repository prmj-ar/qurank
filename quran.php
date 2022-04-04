<?php
############ by @rgmy.me sample cod for modren quran web app  https://instagram.com/rgmy.me  tiktok @programming.ar https://github.com/prmg-ar/quran_rgmy
header("Content-Type: application/json");
$sura_num = filter_input(INPUT_GET,'sura_num', FILTER_SANITIZE_NUMBER_INT);
$get_page = filter_input(INPUT_GET,'page', FILTER_VALIDATE_INT, array(
        'options' => array(
            'default'   => 1,
            'min_range' => 1,
            'max_range' => 500
        ),
    ));
    

if ($get_page > 500){
    echo json_encode(['status' => 0],true);
    exit;
}
#$get_page = filter_var($get_page, FILTER_SANITIZE_STRING);
$get_page = intval($get_page);

function db_con(){
try {
    $info = ['user' => "","password" => "",
    "dbname" => "",
    "host" => "127.0.0.1:port"];
    $pdo = new PDO('mysql:host='.$info['host'].';dbname='.$info['dbname'], $info['user'], $info['password'],array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8") );
    
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
    return $pdo;
} catch(PDOException $err) {
    die($err->getMessage());
}
}
function db_get($sql,$exec){
 if ($conn = db_con()){  
   $statement =$conn->prepare($sql);
   $statement->execute($exec);
    $rs = $statement->fetchAll(PDO::FETCH_ASSOC);
if ($statement->rowCount() > 0) {
     return  $rs;
} else {
   return false;     
 }
 }
}
$out = db_get('SELECT count(sura) as crow FROM `quran_text` WHERE `sura`=:sura_num
 ;',[':sura_num' => $sura_num]);
$pages_button = (ceil($out[0]['crow'] / 10));
$limit_per_page  = 10;
$next_row = ($get_page - 1) * $limit_per_page ;


$out = db_get('SELECT * FROM `quran_text` WHERE `sura`=:sura_num order by sura limit 10 OFFSET :page
;',[':sura_num' => $sura_num,":page" => $next_row]);
echo json_encode(["quran" => $out,"pages" => $pages_button ,"page" => $get_page],false);
exit;
?>
