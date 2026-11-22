import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressSearchHandler,
  configsHandler,
  emailsHandler,
  keysHandler,
  licenseesHandler,
  phoneNumbersHandler,
  placeSearchHandler,
  ukHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', ukHandler)
  .route('/', addressSearchHandler)
  .route('/', emailsHandler)
  .route('/', keysHandler)
  .route('/', configsHandler)
  .route('/', licenseesHandler)
  .route('/', phoneNumbersHandler)
  .route('/', placeSearchHandler)

export default app
