import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cripcHandler,
  cvipcHandler,
  egipcHandler,
  gicerHandler,
  hlipcHandler,
  hmipcHandler,
  miipcHandler,
  mripcHandler,
  pripcHandler,
  twipcHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cripcHandler)
  .route('/', cvipcHandler)
  .route('/', egipcHandler)
  .route('/', gicerHandler)
  .route('/', hlipcHandler)
  .route('/', hmipcHandler)
  .route('/', miipcHandler)
  .route('/', mripcHandler)
  .route('/', pripcHandler)
  .route('/', twipcHandler)

export default app
