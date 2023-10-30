import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { authRoute } from './routes/authRoute';
import { projectsRoute } from './routes/projectsRoute';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const URL: string | undefined = process.env.MONGO_URL;


app.use(cors());
app.use(express.json());

mongoose.connect(URL || '')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.use('/auth', authRoute);
app.use('/projects', projectsRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
