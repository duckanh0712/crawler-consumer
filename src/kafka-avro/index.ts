// const Kafka = require('kafkajs');
// const { SchemaRegistry, AvroKafka} = require ('@ovotech/avro-kafkajs');
// const avro = require('avsc');

// const ProductSchema = avro.Type.forSchema({
//     type: 'record',
//     fields: [{
//         name: 'field1',
//         type: 'string'
//     }]
// });

// const main = async () => {
//     const schemaRegistry = new SchemaRegistry({ uri: 'http://localhost:8081'});
//     const kafka = new Kafka({ brokers: ['localhost:29092']});
//     const avroKafka = new AvroKafka(schemaRegistry,kafka);

// // consumer
//     const consumer = avroKafka.consumer({ groupId: 'productShopee'});
//     await consumer.connect();
//     await consumer.subscribe({ topic: 'product_Shopee'});
//     await consumer.run<ProductSchema>({
//         eachMessage: async ({ message }) => {
//             console.log(message.value);
//         }
//     })
// }


// module.exports = main;


