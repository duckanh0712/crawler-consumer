import { Kafka } from 'kafkajs'
import { SchemaRegistry, AvroKafka } from '@ovotech/avro-kafkajs';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
mongoose.connection.once('open', () => {
    console.log('conected to mongoDB!');
})


// const saveProduct = async (message) => {

// }

const main = async () => {
    const schemaRegistry = new SchemaRegistry({ uri: 'http://localhost:8081' });
    const kafka = new Kafka({ brokers: ['localhost:9092'] });
    const avroKafka = new AvroKafka(schemaRegistry, kafka);

    // consumer

    console.log(kafka)
    const consumer = avroKafka.consumer({ groupId: 'productShopee' });
    //const consumer1 = avroKafka.consumer({ groupId: 'productShopee' });

    let connected = false;
    while (!connected) {
        try {
            // await Promise.all([
            //     consumer.connect(),
            //     consumer1.connect()
            // ])
            
            // await Promise.all([
            //     consumer.subscribe({ topic: 'product_Shopee' }),
            //     consumer1.subscribe({ topic: 'product_Shopee' })
            // ])

            await consumer.connect();
            await consumer.subscribe({ topic: 'product_Shopee' });
            await consumer.run({
                eachMessage: async ({ message }) => {
                    console.log(message.value);
                    // saveProduct(message);
                }
            });
            connected = true;
        }
        catch (e) {
            console.log(e)
        }
    }
}
main();

