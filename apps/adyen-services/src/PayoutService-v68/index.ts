import { OpenAPIHono } from '@hono/zod-openapi'
import {
  confirmThirdPartyHandler,
  declineThirdPartyHandler,
  payoutHandler,
  storeDetailAndSubmitThirdPartyHandler,
  storeDetailHandler,
  submitThirdPartyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', confirmThirdPartyHandler)
  .route('/', declineThirdPartyHandler)
  .route('/', payoutHandler)
  .route('/', storeDetailHandler)
  .route('/', storeDetailAndSubmitThirdPartyHandler)
  .route('/', submitThirdPartyHandler)

export default app
