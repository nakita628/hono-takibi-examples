import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cripcHandler,
  cvipcHandler,
  hlipcHandler,
  miipcHandler,
  tripcHandler,
  twipcHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cripcHandler)
  .route('/', cvipcHandler)
  .route('/', hlipcHandler)
  .route('/', miipcHandler)
  .route('/', tripcHandler)
  .route('/', twipcHandler)

export default app
