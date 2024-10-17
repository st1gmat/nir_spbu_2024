const express = require('express');
// const { Kafka } = require('kafkajs');
const kafka = require('../shared/kafkaConfig')
const app = express();
const port = 3000;

// const kafka = new Kafka({
//   clientId: 'my-app',
//   brokers: ['localhost:9092'], // Замените на адрес вашего Kafka-брокера
// });

const producer = kafka.producer();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/send', async (req, res) => {
  await producer.connect();
  
  const message = {
    value: '_message_',
  };

  try {
    const result = await producer.send({
      topic: 'your-topic-name',
      messages: [message],
    });
    
    console.log('Message sent successfully:', result);
    res.send('Message sent successfully');
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).send('Error sending message');
  } finally {
    await producer.disconnect();
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
