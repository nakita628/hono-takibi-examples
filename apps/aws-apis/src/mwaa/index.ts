import { OpenAPIHono } from '@hono/zod-openapi'
import {
  clitokenHandler,
  environmentsHandler,
  metricsHandler,
  tagsHandler,
  webtokenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', clitokenHandler)
  .route('/', environmentsHandler)
  .route('/', webtokenHandler)
  .route('/', tagsHandler)
  .route('/', metricsHandler)

export default app
