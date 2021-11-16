import app from './app';
import 'reflect-metadata';
import './database';

app.listen(3020, () => {
  console.log('🏃 Running Server');
});
