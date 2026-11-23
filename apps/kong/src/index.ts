import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  caCertificatesHandler,
  cacheHandler,
  certificatesHandler,
  clusteringHandler,
  configHandler,
  consumersHandler,
  debugHandler,
  endpointHandler,
  endpointsHandler,
  filterChainsHandler,
  keySetsHandler,
  keysHandler,
  pluginsHandler,
  routesHandler,
  schemasHandler,
  servicesHandler,
  snisHandler,
  statusHandler,
  tagsHandler,
  timersHandler,
  upstreamsHandler,
  vaultsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', caCertificatesHandler)
  .route('/', certificatesHandler)
  .route('/', consumersHandler)
  .route('/', keySetsHandler)
  .route('/', keysHandler)
  .route('/', pluginsHandler)
  .route('/', routesHandler)
  .route('/', servicesHandler)
  .route('/', snisHandler)
  .route('/', upstreamsHandler)
  .route('/', vaultsHandler)
  .route('/', endpointsHandler)
  .route('/', endpointHandler)
  .route('/', schemasHandler)
  .route('/', timersHandler)
  .route('/', statusHandler)
  .route('/', tagsHandler)
  .route('/', debugHandler)
  .route('/', filterChainsHandler)
  .route('/', clusteringHandler)
  .route('/', cacheHandler)
  .route('/', configHandler)

export default app
