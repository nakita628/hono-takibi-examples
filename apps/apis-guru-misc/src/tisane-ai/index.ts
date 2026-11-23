import { OpenAPIHono } from '@hono/zod-openapi'
import {
  hypernymsHandler,
  hyponymsHandler,
  inflectionsHandler,
  lmHandler,
  sensesHandler,
  valuesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hypernymsHandler)
  .route('/', hyponymsHandler)
  .route('/', inflectionsHandler)
  .route('/', lmHandler)
  .route('/', sensesHandler)
  .route('/', valuesHandler)

export default app
