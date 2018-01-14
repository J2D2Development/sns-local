import * as express from 'express';

// import routes
import SubscribeRoute from './Routes/subscribe';

class App {
  public express: express.Application;
  private subscribeRoute: express.Router = SubscribeRoute;
  public subscribers: string[] = [];

  constructor () {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    const router: express.Router = express.Router();
    router.get('/', (req, res): void => {
        res.json({
            home: true,
            msg: 'You reached the homepage'
        });
    });

    this.express.use('/', router);
    this.express.use('/subscribe', this.subscribeRoute);
  }
}

export default new App().express;