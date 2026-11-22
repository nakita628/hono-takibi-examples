import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountInformationServiceAISHandler,
  confirmationOfFundsServicePIISHandler,
  paymentInitiationServicePISHandler,
  signingBasketsServiceSBSHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountInformationServiceAISHandler)
  .route('/', confirmationOfFundsServicePIISHandler)
  .route('/', signingBasketsServiceSBSHandler)
  .route('/', paymentInitiationServicePISHandler)

export default app
