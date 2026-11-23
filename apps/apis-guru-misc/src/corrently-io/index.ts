import { OpenAPIHono } from '@hono/zod-openapi'
import {
  alternativeHandler,
  gsiHandler,
  meteringHandler,
  quittungHandler,
  stromkontoHandler,
  tariffHandler,
  wimHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', alternativeHandler)
  .route('/', gsiHandler)
  .route('/', meteringHandler)
  .route('/', quittungHandler)
  .route('/', stromkontoHandler)
  .route('/', tariffHandler)
  .route('/', wimHandler)

export default app
