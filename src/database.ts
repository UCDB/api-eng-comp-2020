import mongoose from 'mongoose';
import { log } from 'console';

const connect = (mongoUri: string): void => {
  mongoose
    .connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      log(`MongoDB Connected successfully on ${mongoUri}`);
    })
    .catch((error) => {
      log('MongoDB Connection error: ', error);
    });
};

export default { connect };
