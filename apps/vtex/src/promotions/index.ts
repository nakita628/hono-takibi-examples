import { OpenAPIHono } from '@hono/zod-openapi'
import {
  bundlesHandler,
  campaignAudiencesHandler,
  couponsHandler,
  notificationsHandler,
  pricesLegacy__v1Handler,
  promotionsAndTaxesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', notificationsHandler)
  .route('/', promotionsAndTaxesHandler)
  .route('/', couponsHandler)
  .route('/', campaignAudiencesHandler)
  .route('/', pricesLegacy__v1Handler)
  .route('/', bundlesHandler)

export default app
