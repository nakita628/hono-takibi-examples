import { OpenAPIHono } from '@hono/zod-openapi'
import {
  authinfoHandler,
  blobsHandler,
  eventsHandler,
  itemsHandler,
  keysHandler,
  kvpairsHandler,
  locationrulesHandler,
  locationsHandler,
  presencesHandler,
  servicesHandler,
  setsHandler,
  spotsetsHandler,
  spotsHandler,
  subscriptionsHandler,
  usersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', authinfoHandler)
  .route('/', blobsHandler)
  .route('/', eventsHandler)
  .route('/', itemsHandler)
  .route('/', keysHandler)
  .route('/', kvpairsHandler)
  .route('/', locationrulesHandler)
  .route('/', locationsHandler)
  .route('/', presencesHandler)
  .route('/', servicesHandler)
  .route('/', setsHandler)
  .route('/', spotsHandler)
  .route('/', spotsetsHandler)
  .route('/', subscriptionsHandler)
  .route('/', usersHandler)

export default app
