import express from 'express';

const app = express();
const PORT = process.env.PORT || 3500;


app.get('/', (req, res) =>
  res.status(200).json({
    message: 'Welcome to avios',
  }),
);

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));

export default app;
