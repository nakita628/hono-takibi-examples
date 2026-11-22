import { OpenAPIHono } from '@hono/zod-openapi'
import {
  emailValidationHandler,
  maliciousUrlScannerHandler,
  phoneValidationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', emailValidationHandler)
  .route('/', phoneValidationHandler)
  .route('/', maliciousUrlScannerHandler)

export default app
