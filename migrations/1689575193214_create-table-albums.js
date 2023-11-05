// eslint-disable-next-line no-unused-vars
const tablee1 = 'albums';
exports.up = (pgm) => {
  pgm.createTable(tablee1,{
    id: {
      primarykey: true,
      type: 'VARCHAR(30)',
      notNull: true,
    },
    name: {
      type: 'VARCHAR(40)',
      notNull: true,
    },
    year: {
      type: 'INT',
      notNull: true,
    },
  })
};

exports.down = (pgm) => {
  pgm.dropTable('tablee1');
};
