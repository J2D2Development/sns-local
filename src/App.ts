import * as express from 'express';

class App {
  public express;
  public subscribers: string[] = [];

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
        // res.sendFile('index.html', { root: __dirname });
        res.json({
            home: true,
            msg: 'You reached the homepage'
        });
    });
    router.get('/:topicName/:stage', (req, res) => {
        // res.send(`You requested topic: ${req.params.topicName} and stage ${req.params.stage}`);
        res.json({
            home: false,
            topicName: req.params.topicName,
            stage: req.params.stage
        });
    });
    this.express.use('/', router);
  }
}

export default new App().express;