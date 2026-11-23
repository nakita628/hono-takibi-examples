import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesHandler,
  autocompleteHandler,
  cleanseHandler,
  emailsHandler,
  keysHandler,
  phoneNumbersHandler,
  placesHandler,
  postcodesHandler,
  udprnHandler,
  umprnHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addressesHandler)
  .route('/', autocompleteHandler)
  .route('/', cleanseHandler)
  .route('/', emailsHandler)
  .route('/', keysHandler)
  .route('/', phoneNumbersHandler)
  .route('/', placesHandler)
  .route('/', postcodesHandler)
  .route('/', udprnHandler)
  .route('/', umprnHandler)

export default app
