/* 薪資頁
[rewrite_local]

^https:\/\/tw\.usehurrier\.com\/api\/rooster-payments\/v1\/payments\/daily\-summary\?date\=\d{4}\-\d{2}\-\d{2}\&city\_id\=\d{1}\&with\_time\_zone\=Asia\%2FTaipei script-response-body https://raw.githubusercontent.com/shyulin/460/master/payment.js

[mitm]
hostname = tw.usehurrier.com


var paymenth = obj.payment_per_hour ; 時薪
var tdistance = obj.total_distance ; 總距離

*/

var body = $response.body;
var obj = JSON.parse(body);

var paymenth = obj.payment_per_hour ;
var tdistance = obj.total_distance ;

var endtime = obj.shifts[0]['141265978'].end_at ;

// const user1 = `時薪:[${paymenth}] \n總距離:[${tdistance}]公里` ;

$notify( "總距離" +tdistance +"公里" , "" , "時薪" +paymenth +"元" + endtime);

$done(body);
