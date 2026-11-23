import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cripcHandler,
  cvipcHandler,
  hlipcHandler,
  hmipcHandler,
  miipcHandler,
  tripcHandler,
  twipcHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cripcHandler)
  .route('/', cvipcHandler)
  .route('/', hlipcHandler)
  .route('/', hmipcHandler)
  .route('/', miipcHandler)
  .route('/', tripcHandler)
  .route('/', twipcHandler)

export default app
