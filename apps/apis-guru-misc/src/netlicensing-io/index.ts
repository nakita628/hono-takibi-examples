import { OpenAPIHono } from '@hono/zod-openapi'
import {
  licenseeHandler,
  licenseHandler,
  licenseTemplateHandler,
  paymentMethodHandler,
  productHandler,
  productModuleHandler,
  tokenHandler,
  transactionHandler,
  utilityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', licenseHandler)
  .route('/', licenseeHandler)
  .route('/', licenseTemplateHandler)
  .route('/', paymentMethodHandler)
  .route('/', productHandler)
  .route('/', productModuleHandler)
  .route('/', tokenHandler)
  .route('/', transactionHandler)
  .route('/', utilityHandler)

export default app
