import mongoose from 'mongoose';

class DBconnection {
  URI: string;

  constructor(URI = '') {
    this.URI = process.env.DB_URI || '';
  }

  async connect(): Promise<void> {
    try {
      await mongoose.connect(this.URI);
    } catch (error) {
      console.error('Error on connect method:', error);
    }
  }
}

export default DBconnection;
