const bcryptjs = require('bcryptjs');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('users',
      [
        {
          nome: 'Rodolfo',
          email: 'rodolfo@gmail.com',
          password_hash: await bcryptjs.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rodolfo2',
          email: 'rodolfo2@gmail.com',
          password_hash: await bcryptjs.hash('654321', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Rodolfo3',
          email: 'rodolfo3@gmail.com',
          password_hash: await bcryptjs.hash('12345678', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ], {});
  },

  down: async () => {

  },
};
