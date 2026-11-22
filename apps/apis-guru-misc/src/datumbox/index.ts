import { OpenAPIHono } from '@hono/zod-openapi'
import {
  documentClassificationHandler,
  informationRetrievalHandler,
  metricsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', documentClassificationHandler)
  .route('/', metricsHandler)
  .route('/', informationRetrievalHandler)

export default app
