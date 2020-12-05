import openSocket from 'socket.io-client';
const socket = openSocket('http://192.168.1.60:80');

class Raspberry
{
  subscribeToTimer(cb) {
      socket.on('timer', timestamp => cb(null, timestamp));
      socket.emit('subscribeToTimer', 1000);
    }
}

const raspberry = new Raspberry();
export default raspberry;