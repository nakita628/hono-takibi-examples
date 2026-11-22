import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bankAccountHandler,
  currencyHandler,
  documentBlockHandler,
  documentHandler,
  organizationHandler,
  partnerHandler,
  productHandler,
  utilHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', bankAccountHandler)
  .route('/', currencyHandler)
  .route('/', documentBlockHandler)
  .route('/', documentHandler)
  .route('/', organizationHandler)
  .route('/', partnerHandler)
  .route('/', productHandler)
  .route('/', utilHandler)

export default app
