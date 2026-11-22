import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  agreementsHandler,
  institutionsHandler,
  paymentsHandler,
  premiumHandler,
  requisitionsHandler,
  tokenHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', premiumHandler)
  .route('/', accountsHandler)
  .route('/', agreementsHandler)
  .route('/', institutionsHandler)
  .route('/', paymentsHandler)
  .route('/', requisitionsHandler)
  .route('/', tokenHandler)

export default app
