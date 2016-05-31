export default {
  method: 'GET',
  path: '/status',
  handler(request, reply) {
    reply('ok');
  }
};
