import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  databasesHandler,
  domainsHandler,
  imagesHandler,
  linodeHandler,
  lkeHandler,
  longviewHandler,
  managedHandler,
  networkingHandler,
  nodebalancersHandler,
  objectStorageHandler,
  profileHandler,
  regionsHandler,
  supportHandler,
  tagsHandler,
  volumesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountHandler)
  .route('/', databasesHandler)
  .route('/', domainsHandler)
  .route('/', imagesHandler)
  .route('/', linodeHandler)
  .route('/', lkeHandler)
  .route('/', longviewHandler)
  .route('/', managedHandler)
  .route('/', networkingHandler)
  .route('/', nodebalancersHandler)
  .route('/', objectStorageHandler)
  .route('/', profileHandler)
  .route('/', regionsHandler)
  .route('/', supportHandler)
  .route('/', tagsHandler)
  .route('/', volumesHandler)

export default app
