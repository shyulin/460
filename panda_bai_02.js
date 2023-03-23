/* panda_bai_02.js
小費移除 狀態中文
[rewrite_local]
^https:\/\/tw\.usehurrier\.com\/api\/mobile\/v2\/state\/999999999*\?source\=Delivery\&update\_trigger\=pull\_down\_gesture url script-response-body https://raw.githubusercontent.com/shyulin/460/master/panda01.js
[mitm]
hostname = tw.usehurrier.com

const zip1 = obj.route.addresses[1].zip ;
const Dmode = obj.courier.dispatching_mode ;
distance_to_pickup
const dtp1 = obj.route.deliveries[0].distance_to_pickup.substr(0, 5) ;
const place1 = obj.route.addresses[1].place_id ;
*/

var body = $response.body;
var obj = JSON.parse(body);

var no = obj.route.deliveries.length ;
var dmode = obj.courier.dispatching_mode ;
var status_d = {courier_notified:"進單中", near_pickup:"接近取餐店家", accepted:"已接單", picked_up:"已取餐", left_pickup:"已取餐出發", near_dropoff:"接近放參位置", dispatched:"預備單"};

if (no === 1 ) {
  //      const status1 = obj.route.deliveries[0].status ;
    const status1 = status_d[obj.route.deliveries[0].status];
   // const status1 = status_d[status_1];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
//        const tip1 = obj.route.deliveries[0].online_tip /100;
 //       const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[1].address_line_1 ;
        const zip1 = obj.route.addresses[1].zip ;
        const si1 = obj.route.addresses[1].special_instructions ;
 //       const place1 = obj.route.addresses[1].place_id ;

        const user1 = `[${no}:1] [${status1}]⏳[${spa1}]\n${cn1} (${von1})\n${name1}  📞(${pn1})\n💵:${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:(${zip1})${add1}\n📋:${si1}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;


        $notify( no + "單" +dmode , "" , user1);

} else if (no === 2 ) {

    const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
 //       const tip1 = obj.route.deliveries[0].online_tip /100 ;
 //       const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[2].address_line_1 ;
        const zip1 = obj.route.addresses[2].zip ;
        const si1 = obj.route.addresses[2].special_instructions ;
//        const place1 = obj.route.addresses[2].place_id ;

const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
 //       const tip2 = obj.route.deliveries[1].online_tip /100 ;
 //       const distance2 = obj.route.deliveries[1].distance ;
        const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[3].address_line_1 ;
        const zip2 = obj.route.addresses[3].zip ;
        const si2 = obj.route.addresses[3].special_instructions ;
//        const place2 = obj.route.addresses[3].place_id ;

        const user1 = `[${no}:1] [${status1}]⏳[${spa1}]\n${cn1} (${von1})\n${name1}  📞(${pn1})\n💵:${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:(${zip1})${add1}\n📋:${si1}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}]⏳[${spa2}]\n${cn2} (${von2})\n${name2}  📞(${pn2})\n💵:${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:(${zip2})${add2}\n📋:${si2}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;


        $notify( no + "單" +dmode , "" , user1 +"\n" +user2);

} else if (no === 3 ) {
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const status1 = status_d[obj.route.deliveries[0].status];
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
  //      const tip1 = obj.route.deliveries[0].online_tip /100 ;
 //       const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[3].address_line_1 ;
        const zip1 = obj.route.addresses[3].zip ;
        const si1 = obj.route.addresses[3].special_instructions ;
  //      const place1 = obj.route.addresses[3].place_id ;

         const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
//        const tip2 = obj.route.deliveries[1].online_tip /100 ;
//        const distance2 = obj.route.deliveries[1].distance ;
        const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[4].address_line_1 ;
        const zip2 = obj.route.addresses[4].zip ;
        const si2 = obj.route.addresses[4].special_instructions ;
 //       const place2 = obj.route.addresses[4].place_id ;

 const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;
 //       const tip3 = obj.route.deliveries[2].online_tip /100 ;
 //       const distance3 = obj.route.deliveries[2].distance ;
        const spa3 = obj.route.deliveries[2].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp3 = obj.route.deliveries[2].distance_to_pickup ;

        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[5].address_line_1 ;
        const zip3 = obj.route.addresses[5].zip ;
        const si3 = obj.route.addresses[5].special_instructions ;
 //       const place3 = obj.route.addresses[5].place_id ;

        const user1 = `[${no}:1] [${status1}]⏳[${spa1}]\n${cn1} (${von1})\n${name1}  📞(${pn1})\n💵:${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:(${zip1})${add1}\n📋:${si1}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}]⏳[${spa2}]\n${cn2} (${von2})\n${name2}  📞(${pn2})\n💵:${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:(${zip2})${add2}\n📋:${si2}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user3 = `[${no}:3] [${status3}]⏳[${spa3}]\n${cn3} (${von3})\n${name3}  📞(${pn3})\n💵:${cash3}\n🛎️:${vendor3} [${items3}]項$${total3}\n🏘:(${zip3})${add3}\n📋:${si3}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;


        $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3);
} else if (no === 4 ) {
    const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;

 //       const tip1 = obj.route.deliveries[0].online_tip /100 ;
 //       const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[4].address_line_1 ;
        const zip1 = obj.route.addresses[4].zip ;
        const si1 = obj.route.addresses[4].special_instructions ;
//        const place1 = obj.route.addresses[4].place_id ;
        
const status2 = status_d[obj.route.deliveries[1].status];
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ;

 //       const tip2 = obj.route.deliveries[1].online_tip /100 ;
//        const distance2 = obj.route.deliveries[1].distance ;
        const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) ;
//        const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[5].address_line_1 ;
        const zip2 = obj.route.addresses[5].zip ;
        const si2 = obj.route.addresses[5].special_instructions ;
 //       const place2 = obj.route.addresses[5].place_id ;
        
 const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;

 //       const tip3 = obj.route.deliveries[2].online_tip /100 ;
 //       const distance3 = obj.route.deliveries[2].distance ;
        const spa3 = obj.route.deliveries[2].scheduled_pickup_at.substr(11, 8) ;
//        const dtp3 = obj.route.deliveries[2].distance_to_pickup ;
        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[6].address_line_1 ;
        const zip3 = obj.route.addresses[6].zip ;
        const si3 = obj.route.addresses[6].special_instructions ;
 //       const place3 = obj.route.addresses[6].place_id ;

 const status4 = status_d[obj.route.deliveries[3].status];
        const cn4 = obj.route.deliveries[3].confirmation_number ;
        const von4 = obj.route.deliveries[3].vendor_order_number ;
        const name4 = obj.route.deliveries[3].name ;
        const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;

  //      const tip4 = obj.route.deliveries[3].online_tip /100 ;
 //       const distance4 = obj.route.deliveries[3].distance ;
        const spa4 = obj.route.deliveries[3].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp4 = obj.route.deliveries[3].distance_to_pickup ;

        const pn4 = obj.route.deliveries[3].phone_number ;
        const items4 = obj.route.deliveries[3].items.length ;
        const total4 = obj.route.deliveries[3].total /100 ;
        const vendor4 = obj.route.deliveries[3].vendor.name ;

        const add4 = obj.route.addresses[7].address_line_1 ;
        const zip4 = obj.route.addresses[7].zip ;
        const si4 = obj.route.addresses[7].special_instructions ;
 //       const place4 = obj.route.addresses[7].place_id ;
        
        const user1 = `[${no}:1] [${status1}]⏳[${spa1}]\n${cn1} (${von1})\n${name1}  📞(${pn1})\n💵:${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:(${zip1})${add1}\n📋:${si1}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}]⏳[${spa2}]\n${cn2} (${von2})\n${name2}  📞(${pn2})\n💵:${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:(${zip2})${add2}\n📋:${si2}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user3 = `[${no}:3] [${status3}]⏳[${spa3}]\n${cn3} (${von3})\n${name3}  📞(${pn3})\n💵:${cash3}\n🛎️:${vendor3} [${items3}]項$${total3}\n🏘:(${zip3})${add3}\n📋:${si3}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user4 = `[${no}:4] [${status4}]⏳[${spa4}]\n${cn4} (${von4})\n${name4}  📞(${pn4})\n💵:${cash4}\n🛎️:${vendor4} [${items4}]項$${total4}\n🏘:(${zip4})${add4}\n📋:${si4}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;

        
        
                $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4);
} else if (no === 5 ) {

    const status1 = status_d[obj.route.deliveries[0].status];
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;

 //       const tip1 = obj.route.deliveries[0].online_tip /100 ;
//        const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp1 = obj.route.deliveries[0].distance_to_pickup ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;
        const vendor1 = obj.route.deliveries[0].vendor.name ;

        const add1 = obj.route.addresses[5].address_line_1 ;
        const zip1 = obj.route.addresses[5].zip ;
        const si1 = obj.route.addresses[5].special_instructions ;
//        const place1 = obj.route.addresses[5].place_id ;

const status2 = status_d[obj.route.deliveries[1].status];       
        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;

 //       const tip2 = obj.route.deliveries[1].online_tip /100 ;
 //       const distance2 = obj.route.deliveries[1].distance ;
        const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp2 = obj.route.deliveries[1].distance_to_pickup ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total /100 ;
        const vendor2 = obj.route.deliveries[1].vendor.name ;

        const add2 = obj.route.addresses[6].address_line_1 ;
        const zip2 = obj.route.addresses[6].zip ;
        const si2 = obj.route.addresses[6].special_instructions ;
 //       const place2 = obj.route.addresses[6].place_id ;
        
 const status3 = status_d[obj.route.deliveries[2].status];
        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;

 //       const tip3 = obj.route.deliveries[2].online_tip /100 ;
 //       const distance3 = obj.route.deliveries[2].distance ;
        const spa3 = obj.route.deliveries[2].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp3 = obj.route.deliveries[2].distance_to_pickup ;

        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total /100 ;
        const vendor3 = obj.route.deliveries[2].vendor.name ;

        const add3 = obj.route.addresses[7].address_line_1 ;
        const zip3 = obj.route.addresses[7].zip ;
        const si3 = obj.route.addresses[7].special_instructions ;
 //       const place3 = obj.route.addresses[7].place_id ;

 const status4 = status_d[obj.route.deliveries[3].status];
        const cn4 = obj.route.deliveries[3].confirmation_number ;
        const von4 = obj.route.deliveries[3].vendor_order_number ;
        const name4 = obj.route.deliveries[3].name ;
        const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;

 //       const tip4 = obj.route.deliveries[3].online_tip /100 ;
//        const distance4 = obj.route.deliveries[3].distance ;
        const spa4 = obj.route.deliveries[3].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp4 = obj.route.deliveries[3].distance_to_pickup ;

        const pn4 = obj.route.deliveries[3].phone_number ;
        const items4 = obj.route.deliveries[3].items.length ;
        const total4 = obj.route.deliveries[3].total /100 ;
        const vendor4 = obj.route.deliveries[3].vendor.name ;

        const add4 = obj.route.addresses[8].address_line_1 ;
        const zip4 = obj.route.addresses[8].zip ;
        const si4 = obj.route.addresses[8].special_instructions ;
//        const place4 = obj.route.addresses[8].place_id ;

const status5 = status_d[obj.route.deliveries[4].status];
        const cn5 = obj.route.deliveries[4].confirmation_number ;
        const von5 = obj.route.deliveries[4].vendor_order_number ;
        const name5 = obj.route.deliveries[4].name ;
        const cash5 = obj.route.deliveries[4].cash_collection.collect_at_dropoff /100 ;

 //       const tip5 = obj.route.deliveries[4].online_tip /100 ;
//        const distance5 = obj.route.deliveries[4].distance ;
        const spa5 = obj.route.deliveries[4].scheduled_pickup_at.substr(11, 8) ;
 //       const dtp5 = obj.route.deliveries[4].distance_to_pickup ;

        const pn5 = obj.route.deliveries[4].phone_number ;
        const items5 = obj.route.deliveries[4].items.length ;
        const total5 = obj.route.deliveries[4].total /100 ;
        const vendor5 = obj.route.deliveries[4].vendor.name ;

        const add5 = obj.route.addresses[9].address_line_1 ;
        const zip5 = obj.route.addresses[9].zip ;
        const si5 = obj.route.addresses[9].special_instructions ;
//        const place5 = obj.route.addresses[9].place_id ;
        
        const user1 = `[${no}:1] [${status1}]⏳[${spa1}]\n${cn1} (${von1})\n${name1}  📞(${pn1})\n💵:${cash1}\n🛎️:${vendor1} [${items1}]項$${total1}\n🏘:(${zip1})${add1}\n📋:${si1}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user2 = `[${no}:2] [${status2}]⏳[${spa2}]\n${cn2} (${von2})\n${name2}  📞(${pn2})\n💵:${cash2}\n🛎️:${vendor2} [${items2}]項$${total2}\n🏘:(${zip2})${add2}\n📋:${si2}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user3 = `[${no}:3] [${status3}]⏳[${spa3}]\n${cn3} (${von3})\n${name3}  📞(${pn3})\n💵:${cash3}\n🛎️:${vendor3} [${items3}]項$${total3}\n🏘:(${zip3})${add3}\n📋:${si3}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user4 = `[${no}:4] [${status4}]⏳[${spa4}]\n${cn4} (${von4})\n${name4}  📞(${pn4})\n💵:${cash4}\n🛎️:${vendor4} [${items4}]項$${total4}\n🏘:(${zip4})${add4}\n📋:${si4}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        const user5 = `[${no}:5] [${status5}]⏳[${spa5}]\n${cn5} (${von5})\n${name5}  📞(${pn5})\n💵:${cash5}\n🛎️:${vendor5} [${items5}]項$${total5}\n🏘:(${zip5})${add5}\n📋:${si5}\n🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸` ;
        
        $notify( no + "單" +dmode , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4 +"\n" +user5);
}
$done(body);

