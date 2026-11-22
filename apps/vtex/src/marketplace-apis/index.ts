import { OpenAPIHono } from '@hono/zod-openapi'
import {
  matchedOffersHandler,
  notificationHandler,
  salesChannelMappingHandler,
  sellerCommissionsHandler,
  sellerInviteHandler,
  sellersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', notificationHandler)
  .route('/', matchedOffersHandler)
  .route('/', sellerInviteHandler)
  .route('/', sellersHandler)
  .route('/', sellerCommissionsHandler)
  .route('/', salesChannelMappingHandler)

export default app
