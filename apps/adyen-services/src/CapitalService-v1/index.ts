import { OpenAPIHono } from '@hono/zod-openapi'
import {
  dynamicOffersHandler,
  grantAccountsHandler,
  grantOffersHandler,
  grantsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', dynamicOffersHandler)
  .route('/', grantAccountsHandler)
  .route('/', grantOffersHandler)
  .route('/', grantsHandler)

export default app
