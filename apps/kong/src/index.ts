import { OpenAPIHono } from '@hono/zod-openapi'
import {
  caCertificatesHandler,
  cacheHandler,
  certificatesHandler,
  clusteringHandler,
  configHandler,
  consumersHandler,
  debugHandler,
  filterChainsHandler,
  informationHandler,
  keySetsHandler,
  keysHandler,
  pluginsHandler,
  routesHandler,
  servicesHandler,
  snIsHandler,
  tagsHandler,
  targetsHandler,
  upstreamsHandler,
  validationHandler,
  vaultsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', informationHandler)
  .route('/', caCertificatesHandler)
  .route('/', certificatesHandler)
  .route('/', snIsHandler)
  .route('/', consumersHandler)
  .route('/', pluginsHandler)
  .route('/', keySetsHandler)
  .route('/', keysHandler)
  .route('/', routesHandler)
  .route('/', servicesHandler)
  .route('/', upstreamsHandler)
  .route('/', targetsHandler)
  .route('/', vaultsHandler)
  .route('/', tagsHandler)
  .route('/', debugHandler)
  .route('/', validationHandler)
  .route('/', filterChainsHandler)
  .route('/', clusteringHandler)
  .route('/', cacheHandler)
  .route('/', configHandler)

export default app
