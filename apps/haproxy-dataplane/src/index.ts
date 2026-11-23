import { OpenAPIHono } from '@hono/zod-openapi'
import {
  __rootHandler,
  healthHandler,
  infoHandler,
  serviceDiscoveryHandler,
  servicesHandler,
  specificationHandler,
  specificationOpenapiv3Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', __rootHandler)
  .route('/', healthHandler)
  .route('/', infoHandler)
  .route('/', serviceDiscoveryHandler)
  .route('/', servicesHandler)
  .route('/', specificationHandler)
  .route('/', specificationOpenapiv3Handler)

export default app
