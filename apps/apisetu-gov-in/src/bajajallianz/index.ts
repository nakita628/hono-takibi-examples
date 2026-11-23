import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cripcHandler,
  cvipcHandler,
  cyipcHandler,
  hlipcHandler,
  hmipcHandler,
  tripcHandler,
  twipcHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cripcHandler)
  .route('/', cvipcHandler)
  .route('/', cyipcHandler)
  .route('/', hlipcHandler)
  .route('/', hmipcHandler)
  .route('/', tripcHandler)
  .route('/', twipcHandler)

export default app
