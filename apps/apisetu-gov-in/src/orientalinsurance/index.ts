import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cripcHandler,
  cvipcHandler,
  egipcHandler,
  hlipcHandler,
  hmipcHandler,
  mripcHandler,
  podocHandler,
  pripcHandler,
  tripcHandler,
  twipcHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cripcHandler)
  .route('/', cvipcHandler)
  .route('/', egipcHandler)
  .route('/', hlipcHandler)
  .route('/', hmipcHandler)
  .route('/', mripcHandler)
  .route('/', podocHandler)
  .route('/', pripcHandler)
  .route('/', tripcHandler)
  .route('/', twipcHandler)

export default app
