/* panda17.js
中文狀態
刷卡圖示
時間到顯示鬧鐘
連結google map
備註 null 顯示無
增加樓層公司 品項 金額
小費隱藏
改圖示
時間錯誤null
substr(11, 8) 改 substring(11, 19)
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
var status_d = {courier_notified:"進單中", near_pickup:"接近取餐店家", accepted:"已接單", picked_up:"已取餐", left_pickup:"已取餐出發", near_dropoff:"接近放餐位置", dispatched:"💡預備單"};


if (no === 1 ) {
        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance >= 3.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[1].address_line_1 ;
        const zip1 = obj.route.addresses[1].zip === null ? '' : '(' +obj.route.addresses[1].zip +')' ;
        const company1 = obj.route.addresses[1].company === null ? '' : '〖' +obj.route.addresses[1].company +'〗' ;
        const floor1 = obj.route.addresses[1].floor === null ? '' : '【樓層:' +obj.route.addresses[1].floor +' 】';
        const si1 = obj.route.addresses[1].special_instructions === null ? '無' : obj.route.addresses[1].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[1].place_id ;

        const user1 = `[${no}:1] [${status1}][${spa1}][${dtp1}]\n${cn1} (${von1}) [${distance1}]\n🗿${name1} 📞(${pn1}) ${tip1}\n${cash1} \n🛎：【${vendor1}】 [${items1}]項 ＄：${total1}\n🏠：${zip1}${company1}${floor1}${add1}\n📝：${si1}\n${place1}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
 
        $notify( no + "單" +dmode , "" , user1);

} else if (no === 2 ) {

        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance >= 3.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[2].address_line_1 ;
        const zip1 = obj.route.addresses[2].zip === null ? '' : '(' +obj.route.addresses[2].zip +')' ;
        const company1 = obj.route.addresses[2].company === null ? '' : '〖' +obj.route.addresses[2].company +'〗' ;
        const floor1 = obj.route.addresses[2].floor === null ? '' : '【樓層:' +obj.route.addresses[2].floor +' 】';
        const si1 = obj.route.addresses[2].special_instructions === null ? '無' : obj.route.addresses[2].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[2].place_id ;

        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const distance2 = obj.route.deliveries[1].distance >= 3.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance ;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[3].address_line_1 ;
        const zip2 = obj.route.addresses[3].zip === null ? '' : '(' +obj.route.addresses[3].zip +')' ;
        const company2 = obj.route.addresses[3].company === null ? '' : '〖' +obj.route.addresses[3].company +'〗' ;
        const floor2 = obj.route.addresses[3].floor === null ? '' : '【樓層:' +obj.route.addresses[3].floor +' 】';
        const si2 = obj.route.addresses[3].special_instructions === null ? '無' : obj.route.addresses[3].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[3].place_id ;

        const user1 = `[${no}:1] [${status1}][${spa1}][${dtp1}]\n${cn1} (${von1}) [${distance1}]\n🗿${name1} 📞(${pn1}) ${tip1}\n${cash1} \n🛎：【${vendor1}】 [${items1}]項 ＄：${total1}\n🏠：${zip1}${company1}${floor1}${add1}\n📝：${si1}\n${place1}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user2 = `[${no}:2] [${status2}][${spa2}][${dtp2}]\n${cn2} (${von2}) [${distance2}]\n🗿${name2} 📞(${pn2}) ${tip2}\n${cash2} \n🛎：【${vendor2}】 [${items2}]項 ＄：${total2}\n🏠：${zip2}${company2}${floor2}${add2}\n📝：${si2}\n${place2}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        
        $notify( no + "單" +dmode , "" , user1 +"\n" +user2);

} else if (no === 3 ) {
const cn1 = obj.route.deliveries[0].confirmation_number ;
        const status1 = status_d[obj.route.deliveries[0].status];
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance >= 3.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance ;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[3].address_line_1 ;
        const zip1 = obj.route.addresses[3].zip === null ? '' : '(' +obj.route.addresses[3].zip +')' ;
        const company1 = obj.route.addresses[3].company === null ? '' : '〖' +obj.route.addresses[3].company +'〗' ;
        const floor1 = obj.route.addresses[3].floor === null ? '' : '【樓層:' +obj.route.addresses[3].floor +' 】';
        const si1 = obj.route.addresses[3].special_instructions === null ? '無' : obj.route.addresses[3].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[3].place_id ;

        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const distance2 = obj.route.deliveries[1].distance >= 3.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance ;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[4].address_line_1 ;
        const zip2 = obj.route.addresses[4].zip === null ? '' : '(' +obj.route.addresses[4].zip +')' ;
        const company2 = obj.route.addresses[4].company === null ? '' : '〖' +obj.route.addresses[4].company +'〗' ;
        const floor2 = obj.route.addresses[4].floor === null ? '' : '【樓層:' +obj.route.addresses[4].floor +' 】';
        const si2 = obj.route.addresses[4].special_instructions === null ? '無' : obj.route.addresses[4].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[4].place_id ;

        const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;
        const tip3 = obj.route.deliveries[2].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[2].online_tip /100 ;
        const distance3 = obj.route.deliveries[2].distance >= 3.5 ? '🛵' +obj.route.deliveries[2].distance : obj.route.deliveries[2].distance;
        const spaa3 = obj.route.deliveries[2].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[2].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa3 = (Date.parse(obj.route.deliveries[2].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa3 +'⏰' : spaa3 ;
        const dtp3 = obj.route.deliveries[2].distance_to_pickup ;

        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length >= 10 ? '🚚' +obj.route.deliveries[2].items.length : obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total >= 100000 ? '😱' +obj.route.deliveries[2].total /100 : obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[5].address_line_1 ;
        const zip3 = obj.route.addresses[5].zip === null ? '' : '(' +obj.route.addresses[5].zip +')' ;
        const company3 = obj.route.addresses[5].company === null ? '' : '〖' +obj.route.addresses[5].company +'〗' ;
        const floor3 = obj.route.addresses[5].floor === null ? '' : '【樓層:' +obj.route.addresses[5].floor +' 】';
        const si3 = obj.route.addresses[5].special_instructions === null ? '無' : obj.route.addresses[5].special_instructions ;
        const place3 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[5].place_id ;

        const user1 = `[${no}:1] [${status1}][${spa1}][${dtp1}]\n${cn1} (${von1}) [${distance1}]\n🗿${name1} 📞(${pn1}) ${tip1}\n${cash1} \n🛎：【${vendor1}】 [${items1}]項 ＄：${total1}\n🏠：${zip1}${company1}${floor1}${add1}\n📝：${si1}\n${place1}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user2 = `[${no}:2] [${status2}][${spa2}][${dtp2}]\n${cn2} (${von2}) [${distance2}]\n🗿${name2} 📞(${pn2}) ${tip2}\n${cash2} \n🛎：【${vendor2}】 [${items2}]項 ＄：${total2}\n🏠：${zip2}${company2}${floor2}${add2}\n📝：${si2}\n${place2}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user3 = `[${no}:3] [${status3}][${spa3}][${dtp3}]\n${cn3} (${von3}) [${distance3}]\n🗿${name3} 📞(${pn3}) ${tip3}\n${cash3} \n🛎：【${vendor3}】 [${items3}]項 ＄：${total3}\n🏠：${zip3}${company3}${floor3}${add3}\n📝：${si3}\n${place3}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;

        $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3);
} else if (no === 4 ) {
        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;

        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance >= 3.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[4].address_line_1 ;
        const zip1 = obj.route.addresses[4].zip === null ? '' : '(' +obj.route.addresses[4].zip +')' ;
        const company1 = obj.route.addresses[4].company === null ? '' : '〖' +obj.route.addresses[4].company +'〗' ;
        const floor1 = obj.route.addresses[4].floor === null ? '' : '【樓層:' +obj.route.addresses[4].floor +' 】';
        const si1 = obj.route.addresses[4].special_instructions === null ? '無' : obj.route.addresses[4].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[4].place_id ;
        
        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;

        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const distance2 = obj.route.deliveries[1].distance >= 3.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[5].address_line_1 ;
        const zip2 = obj.route.addresses[5].zip === null ? '' : '(' +obj.route.addresses[5].zip +')' ;
        const company2 = obj.route.addresses[5].company === null ? '' : '〖' +obj.route.addresses[5].company +'〗' ;
        const floor2 = obj.route.addresses[5].floor === null ? '' : '【樓層:' +obj.route.addresses[5].floor +' 】';
        const si2 = obj.route.addresses[5].special_instructions === null ? '無' : obj.route.addresses[5].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[5].place_id ;
        
        const status3 = status_d[obj.route.deliveries[3].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;

        const tip3 = obj.route.deliveries[2].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[2].online_tip /100 ;
        const distance3 = obj.route.deliveries[2].distance >= 3.5 ? '🛵' +obj.route.deliveries[2].distance : obj.route.deliveries[2].distance;
        const spaa3 = obj.route.deliveries[2].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[2].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa3 = (Date.parse(obj.route.deliveries[2].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa3 +'⏰' : spaa3 ;
        const dtp3 = obj.route.deliveries[2].distance_to_pickup ;
        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length >= 10 ? '🚚' +obj.route.deliveries[2].items.length : obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total >= 100000 ? '😱' +obj.route.deliveries[2].total /100 : obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[6].address_line_1 ;
        const zip3 = obj.route.addresses[6].zip === null ? '' : '(' +obj.route.addresses[6].zip +')' ;
        const company3 = obj.route.addresses[6].company === null ? '' : '〖' +obj.route.addresses[6].company +'〗' ;
        const floor3 = obj.route.addresses[6].floor === null ? '' : '【樓層:' +obj.route.addresses[6].floor +' 】';
        const si3 = obj.route.addresses[6].special_instructions === null ? '無' : obj.route.addresses[6].special_instructions ;
        const place3 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[6].place_id ;

        const status4 = status_d[obj.route.deliveries[3].status];
        const cn4 = obj.route.deliveries[3].confirmation_number ;
        const von4 = obj.route.deliveries[3].vendor_order_number ;
        const name4 = obj.route.deliveries[3].name ;
        const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;

        const tip4 = obj.route.deliveries[3].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[3].online_tip /100 ;
        const distance4 = obj.route.deliveries[3].distance >= 3.5 ? '🛵' +obj.route.deliveries[3].distance : obj.route.deliveries[3].distance;
        const spaa4 = obj.route.deliveries[3].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[3].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa4 = (Date.parse(obj.route.deliveries[3].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa4 +'⏰' : spaa4 ;
        const dtp4 = obj.route.deliveries[3].distance_to_pickup ;

        const pn4 = obj.route.deliveries[3].phone_number ;
        const items4 = obj.route.deliveries[3].items.length >= 10 ? '🚚' +obj.route.deliveries[3].items.length : obj.route.deliveries[3].items.length ;
        const total4 = obj.route.deliveries[3].total >= 100000 ? '😱' +obj.route.deliveries[3].total /100 : obj.route.deliveries[3].total /100 ;
        const vendor4 = obj.route.deliveries[3].vendor.name ;

        const add4 = obj.route.addresses[7].address_line_1 ;
        const zip4 = obj.route.addresses[7].zip === null ? '' : '(' +obj.route.addresses[7].zip +')' ;
        const company4 = obj.route.addresses[7].company === null ? '' : '〖' +obj.route.addresses[7].company +'〗' ;
        const floor4 = obj.route.addresses[7].floor === null ? '' : '【樓層:' +obj.route.addresses[7].floor +' 】';
        const si4 = obj.route.addresses[7].special_instructions === null ? '無' : obj.route.addresses[7].special_instructions ;
        const place4 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[1].place_id ;
        
        const user1 = `[${no}:1] [${status1}][${spa1}][${dtp1}]\n${cn1} (${von1}) [${distance1}]\n🗿${name1} 📞(${pn1}) ${tip1}\n${cash1} \n🛎：【${vendor1}】 [${items1}]項 ＄：${total1}\n🏠：${zip1}${company1}${floor1}${add1}\n📝：${si1}\n${place1}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user2 = `[${no}:2] [${status2}][${spa2}][${dtp2}]\n${cn2} (${von2}) [${distance2}]\n🗿${name2} 📞(${pn2}) ${tip2}\n${cash2} \n🛎：【${vendor2}】 [${items2}]項 ＄：${total2}\n🏠：${zip2}${company2}${floor2}${add2}\n📝：${si2}\n${place2}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user3 = `[${no}:3] [${status3}][${spa3}][${dtp3}]\n${cn3} (${von3}) [${distance3}]\n🗿${name3} 📞(${pn3}) ${tip3}\n${cash3} \n🛎：【${vendor3}】 [${items3}]項 ＄：${total3}\n🏠：${zip3}${company3}${floor3}${add3}\n📝：${si3}\n${place3}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user4 = `[${no}:4] [${status4}][${spa4}][${dtp4}]\n${cn4} (${von4}) [${distance4}]\n🗿${name4} 📞(${pn4}) ${tip4}\n${cash4} \n🛎：【${vendor4}】 [${items4}]項 ＄：${total4}\n🏠：${zip4}${company4}${floor4}${add4}\n📝：${si4}\n${place4}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        
                $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4);
} else if (no === 5 ) {

        const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;

        const tip1 = obj.route.deliveries[0].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance >= 3.5 ? '🛵' +obj.route.deliveries[0].distance : obj.route.deliveries[0].distance;
        const spaa1 = obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[0].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa1 = (Date.parse(obj.route.deliveries[0].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa1 +'⏰' : spaa1 ;
        const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length >= 10 ? '🚚' +obj.route.deliveries[0].items.length : obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total >= 100000 ? '😱' +obj.route.deliveries[0].total /100 : obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[5].address_line_1 ;
        const zip1 = obj.route.addresses[5].zip === null ? '' : '(' +obj.route.addresses[5].zip +')' ;
        const company1 = obj.route.addresses[5].company === null ? '' : '〖' +obj.route.addresses[5].company +'〗' ;
        const floor1 = obj.route.addresses[5].floor === null ? '' : '【樓層:' +obj.route.addresses[5].floor +' 】';
        const si1 = obj.route.addresses[5].special_instructions === null ? '無' : obj.route.addresses[5].special_instructions ;
        const place1 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[5].place_id ;

        const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;

        const tip2 = obj.route.deliveries[1].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[1].online_tip /100 ;
        const distance2 = obj.route.deliveries[1].distance >= 3.5 ? '🛵' +obj.route.deliveries[1].distance : obj.route.deliveries[1].distance;
        const spaa2 = obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[1].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa2 = (Date.parse(obj.route.deliveries[1].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa2 +'⏰' : spaa2 ;
        const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length >= 10 ? '🚚' +obj.route.deliveries[1].items.length : obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total >= 100000 ? '😱' +obj.route.deliveries[1].total /100 : obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[6].address_line_1 ;
        const zip2 = obj.route.addresses[6].zip === null ? '' : '(' +obj.route.addresses[6].zip +')' ;
        const company2 = obj.route.addresses[6].company === null ? '' : '〖' +obj.route.addresses[6].company +'〗' ;
        const floor2 = obj.route.addresses[6].floor === null ? '' : '【樓層:' +obj.route.addresses[6].floor +' 】';
        const si2 = obj.route.addresses[6].special_instructions === null ? '無' : obj.route.addresses[6].special_instructions ;
        const place2 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[6].place_id ;
        
        const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;

        const tip3 = obj.route.deliveries[2].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[2].online_tip /100 ;
        const distance3 = obj.route.deliveries[2].distance >= 3.5 ? '🛵' +obj.route.deliveries[2].distance : obj.route.deliveries[2].distance;
        const spaa3 = obj.route.deliveries[2].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[2].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa3 = (Date.parse(obj.route.deliveries[2].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa3 +'⏰' : spaa3 ;
        const dtp3 = obj.route.deliveries[2].distance_to_pickup ;

        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length >= 10 ? '🚚' +obj.route.deliveries[2].items.length : obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total >= 100000 ? '😱' +obj.route.deliveries[2].total /100 : obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[7].address_line_1 ;
        const zip3 = obj.route.addresses[7].zip === null ? '' : '(' +obj.route.addresses[7].zip +')' ;
        const company3 = obj.route.addresses[7].company === null ? '' : '〖' +obj.route.addresses[7].company +'〗' ;
        const floor3 = obj.route.addresses[7].floor === null ? '' : '【樓層:' +obj.route.addresses[7].floor +' 】';
        const si3 = obj.route.addresses[7].special_instructions === null ? '無' : obj.route.addresses[7].special_instructions ;
        const place3 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[7].place_id ;

        const status4 = status_d[obj.route.deliveries[3].status];
        const cn4 = obj.route.deliveries[3].confirmation_number ;
        const von4 = obj.route.deliveries[3].vendor_order_number ;
        const name4 = obj.route.deliveries[3].name ;
        const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;

        const tip4 = obj.route.deliveries[3].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[3].online_tip /100 ;
        const distance4 = obj.route.deliveries[3].distance >= 3.5 ? '🛵' +obj.route.deliveries[3].distance : obj.route.deliveries[3].distance;
        const spaa4 = obj.route.deliveries[3].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[3].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa4 = (Date.parse(obj.route.deliveries[3].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa4 +'⏰' : spaa4 ;
        const dtp4 = obj.route.deliveries[3].distance_to_pickup ;

        const pn4 = obj.route.deliveries[3].phone_number ;
        const items4 = obj.route.deliveries[3].items.length >= 10 ? '🚚' +obj.route.deliveries[3].items.length : obj.route.deliveries[3].items.length ;
        const total4 = obj.route.deliveries[3].total >= 100000 ? '😱' +obj.route.deliveries[3].total /100 : obj.route.deliveries[3].total /100 ;
        const vendor4 = obj.route.deliveries[3].vendor.name ;

        const add4 = obj.route.addresses[8].address_line_1 ;
        const zip4 = obj.route.addresses[8].zip === null ? '' : '(' +obj.route.addresses[8].zip +')' ;
        const company4 = obj.route.addresses[8].company === null ? '' : '〖' +obj.route.addresses[8].company +'〗' ;
        const floor4 = obj.route.addresses[8].floor === null ? '' : '【樓層:' +obj.route.addresses[8].floor +' 】';
        const si4 = obj.route.addresses[8].special_instructions === null ? '無' : obj.route.addresses[8].special_instructions ;
        const place4 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[8].place_id ;

        const status5 = status_d[obj.route.deliveries[4].status];
        const cn5 = obj.route.deliveries[4].confirmation_number ;
        const von5 = obj.route.deliveries[4].vendor_order_number ;
        const name5 = obj.route.deliveries[4].name ;
        const cash5 = obj.route.deliveries[4].cash_collection.collect_at_dropoff ==  0 ? '💳💳💳' : '💵：' +obj.route.deliveries[4].cash_collection.collect_at_dropoff /100 ;

        const tip5 = obj.route.deliveries[4].online_tip === 0 ? '' : '💰:' + obj.route.deliveries[4].online_tip /100 ;
        const distance5 = obj.route.deliveries[4].distance >= 3.5 ? '🛵' +obj.route.deliveries[4].distance : obj.route.deliveries[4].distance;
        const spaa5 = obj.route.deliveries[4].scheduled_pickup_at.substring(11, 19) !== null ? obj.route.deliveries[4].scheduled_pickup_at.substring(11, 19) : '重刷一次' ;
        const spa5 = (Date.parse(obj.route.deliveries[4].scheduled_pickup_at)).valueOf() < (new Date()).valueOf() ? spaa5 +'⏰' : spaa5 ;
        const dtp5 = obj.route.deliveries[4].distance_to_pickup ;

        const pn5 = obj.route.deliveries[4].phone_number ;
        const items5 = obj.route.deliveries[4].items.length >= 10 ? '🚚' +obj.route.deliveries[4].items.length : obj.route.deliveries[4].items.length ;
        const total5 = obj.route.deliveries[4].total >= 100000 ? '😱' +obj.route.deliveries[4].total /100 : obj.route.deliveries[4].total /100 ;
        const vendor5 = obj.route.deliveries[4].vendor.name ;

        const add5 = obj.route.addresses[9].address_line_1 ;
        const zip5 = obj.route.addresses[9].zip === null ? '' : '(' +obj.route.addresses[9].zip +')' ;
        const company5 = obj.route.addresses[9].company === null ? '' : '〖' +obj.route.addresses[9].company +'〗' ;
        const floor5 = obj.route.addresses[9].floor === null ? '' : '【樓層:' +obj.route.addresses[9].floor +' 】';
        const si5 = obj.route.addresses[9].special_instructions === null ? '無' : obj.route.addresses[9].special_instructions ;
        const place5 = "https://www.google.com/maps/search/?api=1&map_action=pano&query=" +obj.route.addresses[9].place_id ;
        
        const user1 = `[${no}:1] [${status1}][${spa1}][${dtp1}]\n${cn1} (${von1}) [${distance1}]\n🗿${name1} 📞(${pn1}) ${tip1}\n${cash1} \n🛎：【${vendor1}】 [${items1}]項 ＄：${total1}\n🏠：${zip1}${company1}${floor1}${add1}\n📝：${si1}\n${place1}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user2 = `[${no}:2] [${status2}][${spa2}][${dtp2}]\n${cn2} (${von2}) [${distance2}]\n🗿${name2} 📞(${pn2}) ${tip2}\n${cash2} \n🛎：【${vendor2}】 [${items2}]項 ＄：${total2}\n🏠：${zip2}${company2}${floor2}${add2}\n📝：${si2}\n${place2}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user3 = `[${no}:3] [${status3}][${spa3}][${dtp3}]\n${cn3} (${von3}) [${distance3}]\n🗿${name3} 📞(${pn3}) ${tip3}\n${cash3} \n🛎：【${vendor3}】 [${items3}]項 ＄：${total3}\n🏠：${zip3}${company3}${floor3}${add3}\n📝：${si3}\n${place3}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user4 = `[${no}:4] [${status4}][${spa4}][${dtp4}]\n${cn4} (${von4}) [${distance4}]\n🗿${name4} 📞(${pn4}) ${tip4}\n${cash4} \n🛎：【${vendor4}】 [${items4}]項 ＄：${total4}\n🏠：${zip4}${company4}${floor4}${add4}\n📝：${si4}\n${place4}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;
        const user5 = `[${no}:5] [${status5}][${spa5}][${dtp5}]\n${cn5} (${von5}) [${distance5}]\n🗿${name5} 📞(${pn5}) ${tip5}\n${cash5} \n🛎：【${vendor5}】 [${items5}]項 ＄：${total5}\n🏠：${zip5}${company5}${floor5}${add5}\n📝：${si5}\n${place5}\n🔆🔆🔆🔆🔆🔆🔆🔆🔆🔆` ;

        $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4 +"\n" +user5);
}
$done(body);
