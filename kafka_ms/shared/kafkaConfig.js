const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092'], // Замените на адрес вашего Kafka-брокера
});

module.exports = kafka;
