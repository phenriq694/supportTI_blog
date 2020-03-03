module.exports = {
  dialect: 'postgres', // Tipo do banco (postgres)
  host: 'localhost',
  username: 'postgres',
  password: 'supportTIblog',
  database: 'supportTIblog', // Nome da database
  define: {
    timestamps: true,
    underscored: true,
    underscoredAdd: true,
  },
};
