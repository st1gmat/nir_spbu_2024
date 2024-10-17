// const { Kafka } = require('kafkajs');
const kafka = require('../shared/kafkaConfig')

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['localhost:9092'], // Замените на адрес вашего Kafka-брокера
// });

const consumer = kafka.consumer({ groupId: 'my-group' });

const run = async () => {

  await consumer.connect();
  
  await consumer.subscribe({ topic: 'your-topic-name', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`Received message: ${message.value.toString()}`);
    },
  });
};

run().catch(console.error);
