/* 
[rewrite_local]
^https:\/\/tw\.usehurrier\.com\/api\/mobile\/v2\/state\/999999999*\?source\=Delivery\&update\_trigger\=pull\_down\_gesture url script-response-body panda01.js
[mitm]
hostname = tw.usehurrier.com


*/

var body = $response.body;
var obj = JSON.parse(body);

var no = obj.route.deliveries.length ;

if (no === 1 ) {
        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const status1 = obj.route.deliveries[0].status ;
        const tip1 = obj.route.deliveries[0].online_tip /100;
        const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(14, 5) ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;

        const add1 = obj.route.addresses[1].address_line_1 ;
        const si1 = obj.route.addresses[1].special_instructions ;

        const user1 = `[${status1}] 距離:${distance1}\n${cn1} (${von1}) ${name1}(${pn1}) 小費:${tip1}\n收:${cash1} (${spa1})取 (${items1})項$${total1}\n地址:${add1}\nPS:${si1}\n=====` ;

        $notify( no + "單" , "" , user1);

} else if (no === 2 ) {

        const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const status1 = obj.route.deliveries[0].status ;
        const tip1 = obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(14, 5) ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;

        const add1 = obj.route.addresses[2].address_line_1 ;
        const si1 = obj.route.addresses[2].special_instructions ;

        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
        const status2 = obj.route.deliveries[1].status ;
        const tip2 = obj.route.deliveries[1].online_tip /100 ;
        const distance2 = obj.route.deliveries[1].distance ;
        const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(14, 5) ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total /100 ;

        const add2 = obj.route.addresses[3].address_line_1 ;
        const si2 = obj.route.addresses[3].special_instructions ;

        const user1 = `[${status1}] 距離:${distance1}\n${cn1} (${von1}) ${name1}(${pn1}) 小費:${tip1}\n收:${cash1} (${spa1})取 (${items1})項$${total1}\n地址:${add1}\nPS:${si1}\n=====` ;
        const user2 = `[${status2}] 距離:${distance2}\n${cn2} (${von2}) ${name2}(${pn2}) 小費:${tip2}\n收:${cash2} (${spa2})取 (${items2})項$${total2}\n地址:${add2}\nPS:${si2}\n=====` ;


        $notify( no + "單" , "" , user1 +"\n" +user2);

} else if (no === 3 ) {
const cn1 = obj.route.deliveries[0].confirmation_number ;
        const von1 = obj.route.deliveries[0].vendor_order_number ;
        const name1 = obj.route.deliveries[0].name ;
        const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
        const status1 = obj.route.deliveries[0].status ;
        const tip1 = obj.route.deliveries[0].online_tip /100 ;
        const distance1 = obj.route.deliveries[0].distance ;
        const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(14, 5) ;

        const pn1 = obj.route.deliveries[0].phone_number ;
        const items1 = obj.route.deliveries[0].items.length ;
        const total1 = obj.route.deliveries[0].total /100 ;

        const add1 = obj.route.addresses[3].address_line_1 ;
        const si1 = obj.route.addresses[3].special_instructions ;

        const cn2 = obj.route.deliveries[1].confirmation_number ;
        const von2 = obj.route.deliveries[1].vendor_order_number ;
        const name2 = obj.route.deliveries[1].name ;
        const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
        const status2 = obj.route.deliveries[1].status ;
        const tip2 = obj.route.deliveries[1].online_tip /100 ;
        const distance2 = obj.route.deliveries[1].distance ;
        const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(14, 5) ;

        const pn2 = obj.route.deliveries[1].phone_number ;
        const items2 = obj.route.deliveries[1].items.length ;
        const total2 = obj.route.deliveries[1].total /100 ;

        const add2 = obj.route.addresses[4].address_line_1 ;
        const si2 = obj.route.addresses[4].special_instructions ;

        const cn3 = obj.route.deliveries[2].confirmation_number ;
        const von3 = obj.route.deliveries[2].vendor_order_number ;
        const name3 = obj.route.deliveries[2].name ;
        const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;
        const status3 = obj.route.deliveries[2].status ;
        const tip3 = obj.route.deliveries[2].online_tip /100 ;
        const distance3 = obj.route.deliveries[2].distance ;
        const spa3 = obj.route.deliveries[2].scheduled_pickup_at.substr(14, 5) ;

        const pn3 = obj.route.deliveries[2].phone_number ;
        const items3 = obj.route.deliveries[2].items.length ;
        const total3 = obj.route.deliveries[2].total /100 ;

        const add3 = obj.route.addresses[5].address_line_1 ;
        const si3 = obj.route.addresses[5].special_instructions ;

        const user1 = `[${status1}] 距離:${distance1}\n${cn1} (${von1}) ${name1}(${pn1}) 小費:${tip1}\n收:${cash1} (${spa1})取 (${items1})項$${total1}\n地址:${add1}\nPS:${si1}\n=====` ;
        const user2 = `[${status2}] 距離:${distance2}\n${cn2} (${von2}) ${name2}(${pn2}) 小費:${tip2}\n收:${cash2} (${spa2})取 (${items2})項$${total2}\n地址:${add2}\nPS:${si2}\n=====` ;
        const user3 = `[${status3}] 距離:${distance3}\n${cn3} (${von3}) ${name3}(${pn3}) 小費:${tip3}\n收:${cash3} (${spa3})取 (${items3})項$${total3}\n地址:${add3}\nPS:${si3}\n=====` ;



        $notify( no + "單" , "" , user1 +"\n" +user2 +"\n" +user3);
} else if (no === 4 ) {
                const cn1 = obj.route.deliveries[0].confirmation_number ;
                const von1 = obj.route.deliveries[0].vendor_order_number ;
                const name1 = obj.route.deliveries[0].name ;
                const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
                const status1 = obj.route.deliveries[0].status ;
                const tip1 = obj.route.deliveries[0].online_tip /100 ;
                const distance1 = obj.route.deliveries[0].distance ;
                const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(14, 5) ;

                const pn1 = obj.route.deliveries[0].phone_number ;
                const items1 = obj.route.deliveries[0].items.length ;
                const total1 = obj.route.deliveries[0].total /100 ;

                const add1 = obj.route.addresses[4].address_line_1 ;
                const si1 = obj.route.addresses[4].special_instructions ;
        
                const cn2 = obj.route.deliveries[1].confirmation_number ;
                const von2 = obj.route.deliveries[1].vendor_order_number ;
                const name2 = obj.route.deliveries[1].name ;
                const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff ;
                const status2 = obj.route.deliveries[1].status ;
                const tip2 = obj.route.deliveries[1].online_tip /100 ;
                const distance2 = obj.route.deliveries[1].distance ;
                const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(14, 5) ;

                const pn2 = obj.route.deliveries[1].phone_number ;
                const items2 = obj.route.deliveries[1].items.length ;
                const total2 = obj.route.deliveries[1].total /100 ;

                const add2 = obj.route.addresses[5].address_line_1 ;
                const si2 = obj.route.addresses[5].special_instructions ;
        
                const cn3 = obj.route.deliveries[2].confirmation_number ;
                const von3 = obj.route.deliveries[2].vendor_order_number ;
                const name3 = obj.route.deliveries[2].name ;
                const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;
                const status3 = obj.route.deliveries[2].status ;
                const tip3 = obj.route.deliveries[2].online_tip /100 ;
                const distance3 = obj.route.deliveries[2].distance ;
                const spa3 = obj.route.deliveries[2].scheduled_pickup_at.substr(14, 5) ;

                const pn3 = obj.route.deliveries[2].phone_number ;
                const items3 = obj.route.deliveries[2].items.length ;
                const total3 = obj.route.deliveries[2].total /100 ;

                const add3 = obj.route.addresses[6].address_line_1 ;
                const si3 = obj.route.addresses[6].special_instructions ;

                const cn4 = obj.route.deliveries[3].confirmation_number ;
                const von4 = obj.route.deliveries[3].vendor_order_number ;
                const name4 = obj.route.deliveries[3].name ;
                const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;
                const status4 = obj.route.deliveries[3].status ;
                const tip4 = obj.route.deliveries[3].online_tip /100 ;
                const distance4 = obj.route.deliveries[3].distance ;
                const spa4 = obj.route.deliveries[3].scheduled_pickup_at.substr(14, 5) ;

                const pn4 = obj.route.deliveries[3].phone_number ;
                const items4 = obj.route.deliveries[3].items.length ;
                const total4 = obj.route.deliveries[3].total /100 ;

                const add4 = obj.route.addresses[7].address_line_1 ;
                const si4 = obj.route.addresses[7].special_instructions ;
        
                const user1 = `[${status1}] 距離:${distance1}\n${cn1} (${von1}) ${name1}(${pn1}) 小費:${tip1}\n收:${cash1} (${spa1})取 (${items1})項$${total1}\n地址:${add1}\nPS:${si1}\n=====` ;
                const user2 = `[${status2}] 距離:${distance2}\n${cn2} (${von2}) ${name2}(${pn2}) 小費:${tip2}\n收:${cash2} (${spa2})取 (${items2})項$${total2}\n地址:${add2}\nPS:${si2}\n=====` ;
                const user3 = `[${status3}] 距離:${distance3}\n${cn3} (${von3}) ${name3}(${pn3}) 小費:${tip3}\n收:${cash3} (${spa3})取 (${items3})項$${total3}\n地址:${add3}\nPS:${si3}\n=====` ;
                const user4 = `[${status4}] 距離:${distance4}\n${cn4} (${von4}) ${name4}(${pn4}) 小費:${tip4}\n收:${cash4} (${spa4})取 (${items4})項$${total4}\n地址:${add4}\nPS:${si4}\n=====` ;
        
        
        
                $notify( no + "單" , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4);
} else if (no === 5 ) {
                const cn1 = obj.route.deliveries[0].confirmation_number ;
                const von1 = obj.route.deliveries[0].vendor_order_number ;
                const name1 = obj.route.deliveries[0].name ;
                const cash1 = obj.route.deliveries[0].cash_collection.collect_at_dropoff /100 ;
                const status1 = obj.route.deliveries[0].status ;
                const tip1 = obj.route.deliveries[0].online_tip /100 ;
                const distance1 = obj.route.deliveries[0].distance ;
                const spa1 = obj.route.deliveries[0].scheduled_pickup_at.substr(14, 5) ;

                const pn1 = obj.route.deliveries[0].phone_number ;
                const items1 = obj.route.deliveries[0].items.length ;
                const total1 = obj.route.deliveries[0].total /100 ;

                const add1 = obj.route.addresses[5].address_line_1 ;
                const si1 = obj.route.addresses[5].special_instructions ;
        
                const cn2 = obj.route.deliveries[1].confirmation_number ;
                const von2 = obj.route.deliveries[1].vendor_order_number ;
                const name2 = obj.route.deliveries[1].name ;
                const cash2 = obj.route.deliveries[1].cash_collection.collect_at_dropoff /100 ;
                const status2 = obj.route.deliveries[1].status ;
                const tip2 = obj.route.deliveries[1].online_tip /100 ;
                const distance2 = obj.route.deliveries[1].distance ;
                const spa2 = obj.route.deliveries[1].scheduled_pickup_at.substr(14, 5) ;

                const pn2 = obj.route.deliveries[1].phone_number ;
                const items2 = obj.route.deliveries[1].items.length ;
                const total2 = obj.route.deliveries[1].total /100 ;

                const add2 = obj.route.addresses[6].address_line_1 ;
                const si2 = obj.route.addresses[6].special_instructions ;
        
                const cn3 = obj.route.deliveries[2].confirmation_number ;
                const von3 = obj.route.deliveries[2].vendor_order_number ;
                const name3 = obj.route.deliveries[2].name ;
                const cash3 = obj.route.deliveries[2].cash_collection.collect_at_dropoff /100 ;
                const status3 = obj.route.deliveries[2].status ;
                const tip3 = obj.route.deliveries[2].online_tip /100 ;
                const distance3 = obj.route.deliveries[2].distance ;
                const spa3 = obj.route.deliveries[2].scheduled_pickup_at.substr(14, 5) ;

                const pn3 = obj.route.deliveries[2].phone_number ;
                const items3 = obj.route.deliveries[2].items.length ;
                const total3 = obj.route.deliveries[2].total /100 ;

                const add3 = obj.route.addresses[7].address_line_1 ;
                const si3 = obj.route.addresses[7].special_instructions ;

                const cn4 = obj.route.deliveries[3].confirmation_number ;
                const von4 = obj.route.deliveries[3].vendor_order_number ;
                const name4 = obj.route.deliveries[3].name ;
                const cash4 = obj.route.deliveries[3].cash_collection.collect_at_dropoff /100 ;
                const status4 = obj.route.deliveries[3].status ;
                const tip4 = obj.route.deliveries[3].online_tip /100 ;
                const distance4 = obj.route.deliveries[3].distance ;
                const spa4 = obj.route.deliveries[3].scheduled_pickup_at.substr(14, 5) ;

                const pn4 = obj.route.deliveries[3].phone_number ;
                const items4 = obj.route.deliveries[3].items.length ;
                const total4 = obj.route.deliveries[3].total /100 ;

                const add4 = obj.route.addresses[8].address_line_1 ;
                const si4 = obj.route.addresses[8].special_instructions ;

                const cn5 = obj.route.deliveries[4].confirmation_number ;
                const von5 = obj.route.deliveries[4].vendor_order_number ;
                const name5 = obj.route.deliveries[4].name ;
                const cash5 = obj.route.deliveries[4].cash_collection.collect_at_dropoff /100 ;
                const status5 = obj.route.deliveries[4].status ;
                const tip5 = obj.route.deliveries[4].online_tip /100 ;
                const distance5 = obj.route.deliveries[4].distance ;
                const spa5 = obj.route.deliveries[4].scheduled_pickup_at.substr(14, 5) ;

                const pn5 = obj.route.deliveries[4].phone_number ;
                const items5 = obj.route.deliveries[4].items.length ;
                const total5 = obj.route.deliveries[4].total /100 ;

                const add5 = obj.route.addresses[9].address_line_1 ;
                const si5 = obj.route.addresses[9].special_instructions ;
        
                const user1 = `[${status1}] 距離:${distance1}\n${cn1} (${von1}) ${name1}(${pn1}) 小費:${tip1}\n收:${cash1} (${spa1})取 (${items1})項$${total1}\n地址:${add1}\nPS:${si1}\n=====` ;
                const user2 = `[${status2}] 距離:${distance2}\n${cn2} (${von2}) ${name2}(${pn2}) 小費:${tip2}\n收:${cash2} (${spa2})取 (${items2})項$${total2}\n地址:${add2}\nPS:${si2}\n=====` ;
                const user3 = `[${status3}] 距離:${distance3}\n${cn3} (${von3}) ${name3}(${pn3}) 小費:${tip3}\n收:${cash3} (${spa3})取 (${items3})項$${total3}\n地址:${add3}\nPS:${si3}\n=====` ;
                const user4 = `[${status4}] 距離:${distance4}\n${cn4} (${von4}) ${name4}(${pn4}) 小費:${tip4}\n收:${cash4} (${spa4})取 (${items4})項$${total4}\n地址:${add4}\nPS:${si4}\n=====` ;
                const user5 = `[${status5}] 距離:${distance5}\n${cn5} (${von5}) ${name5}(${pn5}) 小費:${tip5}\n收:${cash5} (${spa5})取 (${items5})項$${total5}\n地址:${add5}\nPS:${si5}\n=====` ;
        
                $notify( no + "單" , "" , user1 +"\n" +user2 +"\n" +user3 +"\n" +user4 +"\n" +user5);
}
$done(body);
