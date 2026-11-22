import { OpenAPIHono } from '@hono/zod-openapi'
import {
  anyOfWithTypeHandler,
  anythingHandler,
  oneOfComplexHandler,
  oneOfWithTypeHandler,
  petsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', petsHandler)
  .route('/', anythingHandler)
  .route('/', anyOfWithTypeHandler)
  .route('/', oneOfComplexHandler)
  .route('/', oneOfWithTypeHandler)

export default app
