/* panda_bai_13.js
中文狀態
刷卡圖示
時間到顯示鬧鐘
連結google map
備註 null 顯示無
增加樓層公司 品項 金額
小費隱藏
null更新
到店距離
修改spaa1
移除距離
店家未接單：
客人位置
客人樓層

[rewrite_local]
^https:\/\/tw\.usehurrier\.com\/api\/mobile\/v2\/state\/999999999*\?source\=Delivery\&update\_trigger\=pull\_down\_gesture url script-response-body https://raw.githubusercontent.com/shyulin/460/master/panda01.js
[mitm]
hostname = tw.usehurrier.com

const zip1 = obj.route.addresses[1].zip ;
const Dmode = obj.courier.dispatching_mode ;
distance_to_pickup
const dtp1 = obj.route.deliveries[0].distance_to_pickup.substr(0, 5) ;
const place1 = obj.route.addresses[1].place_id ;

obj.route.addresses[1].company ;
obj.route.addresses[1].floor ;

*/

var body = $response.body;
var obj = JSON.parse(body);

var no = obj.route.deliveries.length ;
var dmode = obj.courier.dispatching_mode ;
var status_d = {courier_notified:"進單", near_pickup:"靠近店家", accepted:"接單", picked_up:"已取餐", left_pickup:"取餐出發", near_dropoff:"靠近放餐點", dispatched:"💡預備單"};


if (no === 1 ) {
        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        ;const dtp1 = obj.route.deliveries[0].distance_to_pickup ;
        ;const distance1 = obj.route.deliveries[0].distance >= 2.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;

        const fra1 = obj.route.deliveries[0].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[0].food_is_ready_at.substring(11, 19) +' 】';
        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[1].primary ;
        ;const zip1 = obj.route.addresses[1].zip === null ? '' : '(' +obj.route.addresses[1].zip +')' ;
        const company1 = obj.route.addresses[1].company === '' ? '' : '〖' +obj.route.addresses[1].company +'〗' ;
        const secondary1 = obj.route.addresses[1].secondary === '' ? '' : '【 ' +obj.route.addresses[1].secondary +' 】';
        const si1 = obj.route.addresses[1].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[1].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[1].latitude +',' +obj.route.addresses[1].longitude ;

        const user1 = `[${no}:1] [${status1}][${spa1}]${fra1}\n${cn1} (${von1}) \n${name1}  📞(${pn1}) ${tip1}\n${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:${company1}${secondary1}${add1}\n📋:${si1}\n[${place1}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        
        $notify( no + "單" +dmode , "" , user1);

} else if (no === 2 ) {

        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        ;const dtp1 = obj.route.deliveries[0].distance_to_pickup ;
        ;const distance1 = obj.route.deliveries[0].distance >= 2.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;

        const fra1 = obj.route.deliveries[0].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[0].food_is_ready_at.substring(11, 19) +' 】';
        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[2].primary ;
        ;const zip1 = obj.route.addresses[2].zip === null ? '' : '(' +obj.route.addresses[2].zip +')' ;
        const company1 = obj.route.addresses[2].company === '' ? '' : '〖' +obj.route.addresses[2].company +'〗' ;
        const secondary1 = obj.route.addresses[2].secondary === '' ? '' : '【 ' +obj.route.addresses[2].secondary +' 】';
        const si1 = obj.route.addresses[2].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[2].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[2].latitude +',' +obj.route.addresses[2].longitude ;

        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at !== null ? obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        ;const dtp2 = obj.route.deliveries[1].distance_to_pickup ;
        ;const distance2 = obj.route.deliveries[1].distance >= 2.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance;

        const fra2 = obj.route.deliveries[1].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[1].food_is_ready_at.substring(11, 19) +' 】';
        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[3].primary ;
        ;const zip2 = obj.route.addresses[3].zip === null ? '' : '(' +obj.route.addresses[3].zip +')' ;
        const company2 = obj.route.addresses[3].company === '' ? '' : '〖' +obj.route.addresses[3].company +'〗' ;
        const secondary2 = obj.route.addresses[3].secondary === '' ? '' : '【 ' +obj.route.addresses[3].secondary +' 】';
        const si2 = obj.route.addresses[3].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[3].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[3].latitude +',' +obj.route.addresses[3].longitude ;

        const user1 = `[${no}:1] [${status1}][${spa1}]${fra1}\n${cn1} (${von1}) \n${name1}  📞(${pn1}) ${tip1}\n${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:${company1}${secondary1}${add1}\n📋:${si1}\n[${place1}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}][${spa2}]${fra2}\n${cn2} (${von2}) \n${name2}  📞(${pn2}) ${tip2}\n${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:${company2}${secondary2}${add2}\n📋:${si2}\n[${place2}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;

        $notify( no + "單" +dmode , "" , user1 +"\n" +user2);

} else if (no === 3 ) {
const cn1 = obj.route.deliveries[0].confirmation_number ;
        const status1 = status_d[obj.route.deliveries[0].status];
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        ;const dtp1 = obj.route.deliveries[0].distance_to_pickup ;
        ;const distance1 = obj.route.deliveries[0].distance >= 2.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;

        const fra1 = obj.route.deliveries[0].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[0].food_is_ready_at.substring(11, 19) +' 】';
        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[3].primary ;
        ;const zip1 = obj.route.addresses[3].zip === null ? '' : '(' +obj.route.addresses[3].zip +')' ;
        const company1 = obj.route.addresses[3].company === '' ? '' : '〖' +obj.route.addresses[3].company +'〗' ;
        const secondary1 = obj.route.addresses[3].secondary === '' ? '' : '【 ' +obj.route.addresses[3].secondary +' 】';
        const si1 = obj.route.addresses[3].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[3].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[3].latitude +',' +obj.route.addresses[3].longitude ;

        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at !== null ? obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        ;const dtp2 = obj.route.deliveries[1].distance_to_pickup ;
        ;const distance2 = obj.route.deliveries[1].distance >= 2.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance;

        const fra2 = obj.route.deliveries[1].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[1].food_is_ready_at.substring(11, 19) +' 】';
        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[4].primary ;
        ;const zip2 = obj.route.addresses[4].zip === null ? '' : '(' +obj.route.addresses[4].zip +')' ;
        const company2 = obj.route.addresses[4].company === '' ? '' : '〖' +obj.route.addresses[4].company +'〗' ;
        const secondary2 = obj.route.addresses[4].secondary === '' ? '' : '【 ' +obj.route.addresses[4].secondary +' 】';
        const si2 = obj.route.addresses[4].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[4].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[4].latitude +',' +obj.route.addresses[4].longitude ;

        const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;
        const tip3 = obj.route.deliveries[2].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[2].online_tip /100 ;
        const spaa3 = obj.route.deliveries[2].scheduled_pickup_at !== null ? obj.route.deliveries[2].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa3 = (Date.parse(obj.route.deliveries[2].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa3 +'⏰' : spaa3 ;
        ;const dtp3 = obj.route.deliveries[2].distance_to_pickup ;
        ;const distance3 = obj.route.deliveries[2].distance >= 2.5 ? '🛵' +obj.route.deliveries[2].distance : obj.route.deliveries[2].distance;

        const fra3 = obj.route.deliveries[2].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[2].food_is_ready_at.substring(11, 19) +' 】';
        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length >= 10 ? '🚚' +obj.route.deliveries[2].items.length : obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total >= 100000 ? '😱' +obj.route.deliveries[2].total /100 : obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[5].primary ;
        ;const zip3 = obj.route.addresses[5].zip === null ? '' : '(' +obj.route.addresses[5].zip +')' ;
        const company3 = obj.route.addresses[5].company === '' ? '' : '〖' +obj.route.addresses[5].company +'〗' ;
        const secondary3 = obj.route.addresses[5].secondary === '' ? '' : '【 ' +obj.route.addresses[5].secondary +' 】';
        const si3 = obj.route.addresses[5].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[5].special_instructions ;
        const place3 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[5].latitude +',' +obj.route.addresses[5].longitude ;

        const user1 = `[${no}:1] [${status1}][${spa1}]${fra1}\n${cn1} (${von1}) \n${name1}  📞(${pn1}) ${tip1}\n${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:${company1}${secondary1}${add1}\n📋:${si1}\n[${place1}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}][${spa2}]${fra2}\n${cn2} (${von2}) \n${name2}  📞(${pn2}) ${tip2}\n${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:${company2}${secondary2}${add2}\n📋:${si2}\n[${place2}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user3 = `[${no}:3] [${status3}][${spa3}]${fra3}\n${cn3} (${von3}) \n${name3}  📞(${pn3}) ${tip3}\n${cash3}\n🛎️:${vendor3} [${items3}]項$${total3}\n🏘:${company3}${secondary3}${add3}\n📋:${si3}\n[${place3}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;


        $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3);
} else if (no === 4 ) {
        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;

        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        ;const dtp1 = obj.route.deliveries[0].distance_to_pickup ;
        ;const distance1 = obj.route.deliveries[0].distance >= 2.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;

        const fra1 = obj.route.deliveries[0].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[0].food_is_ready_at.substring(11, 19) +' 】';
        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[4].primary ;
        ;const zip1 = obj.route.addresses[4].zip === null ? '' : '(' +obj.route.addresses[4].zip +')' ;
        const company1 = obj.route.addresses[4].company === '' ? '' : '〖' +obj.route.addresses[4].company +'〗' ;
        const secondary1 = obj.route.addresses[4].secondary === '' ? '' : '【 ' +obj.route.addresses[4].secondary +' 】';
        const si1 = obj.route.addresses[4].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[4].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[4].latitude +',' +obj.route.addresses[4].longitude ;
        
        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;

        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at !== null ? obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        ;const dtp2 = obj.route.deliveries[1].distance_to_pickup ;
        ;const distance2 = obj.route.deliveries[1].distance >= 2.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance;

        const fra2 = obj.route.deliveries[1].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[1].food_is_ready_at.substring(11, 19) +' 】';
        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[5].primary ;
        ;const zip2 = obj.route.addresses[5].zip === null ? '' : '(' +obj.route.addresses[5].zip +')' ;
        const company2 = obj.route.addresses[5].company === '' ? '' : '〖' +obj.route.addresses[5].company +'〗' ;
        const secondary2 = obj.route.addresses[5].secondary === '' ? '' : '【 ' +obj.route.addresses[5].secondary +' 】';
        const si2 = obj.route.addresses[5].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[5].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[5].latitude +',' +obj.route.addresses[5].longitude ;
        
        const status3 = status_d[obj.route.deliveries[3].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;

        const tip3 = obj.route.deliveries[2].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[2].online_tip /100 ;
        const spaa3 = obj.route.deliveries[2].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa3 = (Date.parse(obj.route.deliveries[2].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa3 +'⏰' : spaa3 ;
        ;const dtp3 = obj.route.deliveries[2].distance_to_pickup ;
        ;const distance3 = obj.route.deliveries[2].distance >= 2.5 ? '🛵' +obj.route.deliveries[2].distance : obj.route.deliveries[2].distance;

        const fra3 = obj.route.deliveries[2].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[2].food_is_ready_at.substring(11, 19) +' 】';
        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length >= 10 ? '🚚' +obj.route.deliveries[2].items.length : obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total >= 100000 ? '😱' +obj.route.deliveries[2].total /100 : obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[6].primary ;
        ;const zip3 = obj.route.addresses[6].zip === null ? '' : '(' +obj.route.addresses[6].zip +')' ;
        const company3 = obj.route.addresses[6].company === '' ? '' : '〖' +obj.route.addresses[6].company +'〗' ;
        const secondary3 = obj.route.addresses[6].secondary === '' ? '' : '【 ' +obj.route.addresses[6].secondary +' 】';
        const si3 = obj.route.addresses[6].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[6].special_instructions ;
        const place3 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[6].latitude +',' +obj.route.addresses[6].longitude ;

        const status4 = status_d[obj.route.deliveries[3].status];
        const cn4 = obj.route.deliveries[3].confirmation_number ;
        const von4 = obj.route.deliveries[3].vendor_order_number ;
        const name4 = obj.route.deliveries[3].name ;
        const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;

        const tip4 = obj.route.deliveries[3].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[3].online_tip /100 ;
        const spaa4 = obj.route.deliveries[3].scheduled_pickup_at !== null ? obj.route.deliveries[3].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa4 = (Date.parse(obj.route.deliveries[3].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa4 +'⏰' : spaa4 ;
        ;const dtp4 = obj.route.deliveries[3].distance_to_pickup ;
        ;const distance4 = obj.route.deliveries[3].distance >= 2.5 ? '🛵' +obj.route.deliveries[3].distance : obj.route.deliveries[3].distance;

        const fra4 = obj.route.deliveries[3].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[3].food_is_ready_at.substring(11, 19) +' 】';
        const pn4 = obj.route.deliveries[3].phone_number ;
        const items4 = obj.route.deliveries[3].items.length >= 10 ? '🚚' +obj.route.deliveries[3].items.length : obj.route.deliveries[3].items.length ;
        const total4 = obj.route.deliveries[3].total >= 100000 ? '😱' +obj.route.deliveries[3].total /100 : obj.route.deliveries[3].total /100 ;
        const vendor4 = obj.route.deliveries[3].vendor.name ;

        const add4 = obj.route.addresses[7].primary ;
        ;const zip4 = obj.route.addresses[7].zip === null ? '' : '(' +obj.route.addresses[7].zip +')' ;
        const company4 = obj.route.addresses[7].company === '' ? '' : '〖' +obj.route.addresses[7].company +'〗' ;
        const secondary4 = obj.route.addresses[7].secondary === '' ? '' : '【 ' +obj.route.addresses[7].secondary +' 】';
        const si4 = obj.route.addresses[7].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[7].special_instructions ;
        const place4 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[7].latitude +',' +obj.route.addresses[7].longitude ;
        
        const user1 = `[${no}:1] [${status1}][${spa1}]${fra1}\n${cn1} (${von1}) \n${name1}  📞(${pn1}) ${tip1}\n${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:${company1}${secondary1}${add1}\n📋:${si1}\n[${place1}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}][${spa2}]${fra2}\n${cn2} (${von2}) \n${name2}  📞(${pn2}) ${tip2}\n${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:${company2}${secondary2}${add2}\n📋:${si2}\n[${place2}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user3 = `[${no}:3] [${status3}][${spa3}]${fra3}\n${cn3} (${von3}) \n${name3}  📞(${pn3}) ${tip3}\n${cash3}\n🛎️:${vendor3} [${items3}]項$${total3}\n🏘:${company3}${secondary3}${add3}\n📋:${si3}\n[${place3}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user4 = `[${no}:4] [${status4}][${spa4}]${fra4}\n${cn4} (${von4}) \n${name4}  📞(${pn4}) ${tip4}\n${cash4}\n🛎️:${vendor4} [${items4}]項$${total4}\n🏘:${company4}${secondary4}${add4}\n📋:${si4}\n[${place4}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;

        
        
                $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4);
} else if (no === 5 ) {

        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;

        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        ;const dtp1 = obj.route.deliveries[0].distance_to_pickup ;
        const distance1 = obj.route.deliveries[0].distance >= 2.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;

        const fra1 = obj.route.deliveries[0].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[0].food_is_ready_at.substring(11, 19) +' 】';
        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[5].primary ;
        ;const zip1 = obj.route.addresses[5].zip === null ? '' : '(' +obj.route.addresses[5].zip +')' ;
        const company1 = obj.route.addresses[5].company === '' ? '' : '〖' +obj.route.addresses[5].company +'〗' ;
        const secondary1 = obj.route.addresses[5].secondary === '' ? '' : '【 ' +obj.route.addresses[5].secondary +' 】';
        const si1 = obj.route.addresses[5].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[5].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[5].latitude +',' +obj.route.addresses[5].longitude ;

        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;

        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        ;const dtp2 = obj.route.deliveries[1].distance_to_pickup ;
        ;const distance2 = obj.route.deliveries[1].distance >= 2.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance;

        const fra2 = obj.route.deliveries[1].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[1].food_is_ready_at.substring(11, 19) +' 】';
        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[6].primary ;
        ;const zip2 = obj.route.addresses[6].zip === null ? '' : '(' +obj.route.addresses[6].zip +')' ;
        const company2 = obj.route.addresses[6].company === '' ? '' : '〖' +obj.route.addresses[6].company +'〗' ;
        const secondary2 = obj.route.addresses[6].secondary === '' ? '' : '【 ' +obj.route.addresses[6].secondary +' 】';
        const si2 = obj.route.addresses[6].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[6].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[6].latitude +',' +obj.route.addresses[6].longitude ;
        
        const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;

        const tip3 = obj.route.deliveries[2].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[2].online_tip /100 ;
        const spaa3 = obj.route.deliveries[2].scheduled_pickup_at !== null ? obj.route.deliveries[2].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa3 = (Date.parse(obj.route.deliveries[2].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa3 +'⏰' : spaa3 ;
        ;const dtp3 = obj.route.deliveries[2].distance_to_pickup ;
        ;const distance3 = obj.route.deliveries[2].distance >= 2.5 ? '🛵' +obj.route.deliveries[2].distance : obj.route.deliveries[2].distance;

        const fra3 = obj.route.deliveries[2].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[2].food_is_ready_at.substring(11, 19) +' 】';
        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length >= 10 ? '🚚' +obj.route.deliveries[2].items.length : obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total >= 100000 ? '😱' +obj.route.deliveries[2].total /100 : obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[7].primary ;
        ;const zip3 = obj.route.addresses[7].zip === null ? '' : '(' +obj.route.addresses[7].zip +')' ;
        const company3 = obj.route.addresses[7].company === '' ? '' : '〖' +obj.route.addresses[7].company +'〗' ;
        const secondary3 = obj.route.addresses[7].secondary === '' ? '' : '【 ' +obj.route.addresses[7].secondary +' 】';
        const si3 = obj.route.addresses[7].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[7].special_instructions ;
        const place3 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[7].latitude +',' +obj.route.addresses[7].longitude ;

        const status4 = status_d[obj.route.deliveries[3].status];
        const cn4 = obj.route.deliveries[3].confirmation_number ;
        const von4 = obj.route.deliveries[3].vendor_order_number ;
        const name4 = obj.route.deliveries[3].name ;
        const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;

        const tip4 = obj.route.deliveries[3].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[3].online_tip /100 ;
        const spaa4 = obj.route.deliveries[3].scheduled_pickup_at !== null ? obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa4 = (Date.parse(obj.route.deliveries[3].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa4 +'⏰' : spaa4 ;
        ;const dtp4 = obj.route.deliveries[3].distance_to_pickup ;
        ;const distance4 = obj.route.deliveries[3].distance >= 2.5 ? '🛵' +obj.route.deliveries[3].distance : obj.route.deliveries[3].distance;

        const fra4 = obj.route.deliveries[3].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[3].food_is_ready_at.substring(11, 19) +' 】';
        const pn4 = obj.route.deliveries[3].phone_number ;
        const items4 = obj.route.deliveries[3].items.length >= 10 ? '🚚' +obj.route.deliveries[3].items.length : obj.route.deliveries[3].items.length ;
        const total4 = obj.route.deliveries[3].total >= 100000 ? '😱' +obj.route.deliveries[3].total /100 : obj.route.deliveries[3].total /100 ;
        const vendor4 = obj.route.deliveries[3].vendor.name ;

        const add4 = obj.route.addresses[8].primary ;
        ;const zip4 = obj.route.addresses[8].zip === null ? '' : '(' +obj.route.addresses[8].zip +')' ;
        const company4 = obj.route.addresses[8].company === '' ? '' : '〖' +obj.route.addresses[8].company +'〗' ;
        const secondary4 = obj.route.addresses[8].secondary === '' ? '' : '【 ' +obj.route.addresses[8].secondary +' 】';
        const si4 = obj.route.addresses[8].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[8].special_instructions ;
        const place4 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[8].latitude +',' +obj.route.addresses[8].longitude ;

        const status5 = status_d[obj.route.deliveries[4].status];
        const cn5 = obj.route.deliveries[4].confirmation_number ;
        const von5 = obj.route.deliveries[4].vendor_order_number ;
        const name5 = obj.route.deliveries[4].name ;
        const cash5 = obj.route.deliveries[4].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[4].cash_collection.collect_at_dropoff /100 ;

        const tip5 = obj.route.deliveries[4].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[4].online_tip /100 ;
        const spaa5 = obj.route.deliveries[4].scheduled_pickup_at !== null ? obj.route.deliveries[4].scheduled_pickup_at.substr(11, 8) : '店家未接單' ;
        const spa5 = (Date.parse(obj.route.deliveries[4].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa5 +'⏰' : spaa5 ;
        ;const dtp5 = obj.route.deliveries[4].distance_to_pickup ;
        ;const distance5 = obj.route.deliveries[4].distance >= 2.5 ? '🛵' +obj.route.deliveries[4].distance : obj.route.deliveries[4].distance;

        const fra5 = obj.route.deliveries[4].food_is_ready_at === null ? '' : '【' +obj.route.deliveries[4].food_is_ready_at.substring(11, 19) +' 】';
        const pn5 = obj.route.deliveries[4].phone_number ;
        const items5 = obj.route.deliveries[4].items.length >= 10 ? '🚚' +obj.route.deliveries[4].items.length : obj.route.deliveries[4].items.length ;
        const total5 = obj.route.deliveries[4].total >= 100000 ? '😱' +obj.route.deliveries[4].total /100 : obj.route.deliveries[4].total /100 ;
        const vendor5 = obj.route.deliveries[4].vendor.name ;

        const add5 = obj.route.addresses[9].primary ;
        ;const zip5 = obj.route.addresses[9].zip === null ? '' : '(' +obj.route.addresses[9].zip +')' ;
        const company5 = obj.route.addresses[9].company === '' ? '' : '〖' +obj.route.addresses[9].company +'〗' ;
        const secondary5 = obj.route.addresses[9].secondary === '' ? '' : '【 ' +obj.route.addresses[9].secondary +' 】';
        const si5 = obj.route.addresses[9].special_instructions === '' ? '🌹🌹最美麗溫柔體貼善解人意的仙女白白降臨囉🌹🌹' : obj.route.addresses[9].special_instructions ;
        const place5 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[9].latitude +',' +obj.route.addresses[9].longitude ;
        

        const user1 = `[${no}:1] [${status1}][${spa1}]${fra1}\n${cn1} (${von1}) \n${name1}  📞(${pn1}) ${tip1}\n${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:${company1}${secondary1}${add1}\n📋:${si1}\n[${place1}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}][${spa2}]${fra2}\n${cn2} (${von2}) \n${name2}  📞(${pn2}) ${tip2}\n${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:${company2}${secondary2}${add2}\n📋:${si2}\n[${place2}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user3 = `[${no}:3] [${status3}][${spa3}]${fra3}\n${cn3} (${von3}) \n${name3}  📞(${pn3}) ${tip3}\n${cash3}\n🛎️:${vendor3} [${items3}]項$${total3}\n🏘:${company3}${secondary3}${add3}\n📋:${si3}\n[${place3}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user4 = `[${no}:4] [${status4}][${spa4}]${fra4}\n${cn4} (${von4}) \n${name4}  📞(${pn4}) ${tip4}\n${cash4}\n🛎️:${vendor4} [${items4}]項$${total4}\n🏘:${company4}${secondary4}${add4}\n📋:${si4}\n[${place4}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user5 = `[${no}:5] [${status5}][${spa5}]${fra5}\n${cn5} (${von5}) \n${name5}  📞(${pn5}) ${tip5}\n${cash5}\n🛎️:${vendor5} [${items5}]項$${total5}\n🏘:${company5}${secondary5}${add5}\n📋:${si5}\n[${place5}]\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4 +"\n" +user5);
}
$done(body);
