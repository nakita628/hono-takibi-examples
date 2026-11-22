import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesHandler,
  profilesHandler,
  prospectsHandler,
  purchaseInformationHandler,
  schemasHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', profilesHandler)
  .route('/', schemasHandler)
  .route('/', addressesHandler)
  .route('/', purchaseInformationHandler)
  .route('/', prospectsHandler)

export default app
