import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountHandler,
  databasesHandler,
  domainsHandler,
  imagesHandler,
  linodeInstancesHandler,
  linodeKubernetesEngineLKEHandler,
  linodeTypesHandler,
  longviewHandler,
  managedHandler,
  networkingHandler,
  nodeBalancersHandler,
  objectStorageHandler,
  profileHandler,
  regionsHandler,
  stackScriptsHandler,
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
  .route('/', linodeInstancesHandler)
  .route('/', stackScriptsHandler)
  .route('/', linodeTypesHandler)
  .route('/', linodeKubernetesEngineLKEHandler)
  .route('/', longviewHandler)
  .route('/', managedHandler)
  .route('/', networkingHandler)
  .route('/', nodeBalancersHandler)
  .route('/', objectStorageHandler)
  .route('/', profileHandler)
  .route('/', regionsHandler)
  .route('/', supportHandler)
  .route('/', tagsHandler)
  .route('/', volumesHandler)

export default app
