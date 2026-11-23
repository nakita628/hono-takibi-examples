import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cripcHandler,
  cvipcHandler,
  gicerHandler,
  hlipcHandler,
  hmipcHandler,
  twipcHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cripcHandler)
  .route('/', cvipcHandler)
  .route('/', gicerHandler)
  .route('/', hlipcHandler)
  .route('/', hmipcHandler)
  .route('/', twipcHandler)

export default app
