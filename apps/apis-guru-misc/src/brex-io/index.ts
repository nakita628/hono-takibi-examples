import { OpenAPIHono } from '@hono/zod-openapi'
import {
  v1CompanyHandler,
  v1EinVerificationHandler,
  v1IbanVerificationHandler,
  v1NifVerificationHandler,
  v1PepsanctionHandler,
  v1ProductHandler,
  v1SystemHandler,
  v1TinVerificationHandler,
  v1VatVerificationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', v1CompanyHandler)
  .route('/', v1EinVerificationHandler)
  .route('/', v1IbanVerificationHandler)
  .route('/', v1NifVerificationHandler)
  .route('/', v1PepsanctionHandler)
  .route('/', v1ProductHandler)
  .route('/', v1SystemHandler)
  .route('/', v1TinVerificationHandler)
  .route('/', v1VatVerificationHandler)

export default app
