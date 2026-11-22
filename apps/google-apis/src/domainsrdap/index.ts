import { OpenAPIHono } from '@hono/zod-openapi'
import {
  autnumHandler,
  domainHandler,
  entityHandler,
  ipHandler,
  nameserverHandler,
  v1Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', autnumHandler)
  .route('/', domainHandler)
  .route('/', v1Handler)
  .route('/', entityHandler)
  .route('/', ipHandler)
  .route('/', nameserverHandler)

export default app
