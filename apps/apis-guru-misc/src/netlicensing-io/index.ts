import { OpenAPIHono } from '@hono/zod-openapi'
import {
  licenseeHandler,
  licenseHandler,
  licensetemplateHandler,
  paymentmethodHandler,
  productHandler,
  productmoduleHandler,
  tokenHandler,
  transactionHandler,
  utilityHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', licenseHandler)
  .route('/', licenseeHandler)
  .route('/', licensetemplateHandler)
  .route('/', paymentmethodHandler)
  .route('/', productHandler)
  .route('/', productmoduleHandler)
  .route('/', tokenHandler)
  .route('/', transactionHandler)
  .route('/', utilityHandler)

export default app
