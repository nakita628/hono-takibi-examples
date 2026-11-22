import { OpenAPIHono } from '@hono/zod-openapi'
import {
  dataToolsHandler,
  eCommerceHandler,
  geolocationHandler,
  imagingHandler,
  securityAndNetworkingHandler,
  telephonyHandler,
  wwwHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dataToolsHandler)
  .route('/', eCommerceHandler)
  .route('/', wwwHandler)
  .route('/', securityAndNetworkingHandler)
  .route('/', geolocationHandler)
  .route('/', telephonyHandler)
  .route('/', imagingHandler)

export default app
