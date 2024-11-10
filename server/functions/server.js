require('dotenv').config();
const { Firestore } = require('firebase-admin/firestore');
const cors = require('cors');
const express = require('express');
const dayjs = require('dayjs');
const app = express();

app.use(cors({ origin: true }));

app.get('/requests', async (req, res) => {
  try {
    const firestore = new Firestore();
    const ref = firestore.collection('requests');
    const snapshot = await ref.get();
    const requests = snapshot.docs.map((doc) => doc.data());
    res.status(200).send(requests);
  } catch (error) {
    console.error('Failed to get requests', error);
    res.status(500).send({ message: 'Error' });
  }
});

app.post('/request', async (req, res) => {
  try {
    const { name, email, description } = req.body;
    const firestore = new Firestore();
    const docRef = firestore.collection('requests').doc();
    await docRef.set({ name, email, description, date: dayjs().format('YYYY-MM-DD') });
    res.status(200).send({ message: 'Success' });
  } catch (error) {
    console.error('Failed to save request', error);
    res.status(500).send({ message: 'Error' });
  }
});

app.post('/auth', async (req, res) => {
  try {
    console.log(req.body);
    const { pass, user } = req.body;
    if (pass === process.env.PASS && user === process.env.USER) {
      res.status(200).send({ message: 'Success' });
    } else {
      res.status(200).send({ message: 'Unauthorized' });
    }
  } catch (error) {
    console.error('Failed to get auth', error);
    res.status(500).send({ message: 'Error' });
  }
});

module.exports = app;
