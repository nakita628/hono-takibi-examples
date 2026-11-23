import { OpenAPIHono } from '@hono/zod-openapi'
import {
  abortHandler,
  adminHandler,
  balanceinquiryHandler,
  cardacquisitionHandler,
  diagnosisHandler,
  displayHandler,
  enableserviceHandler,
  gettotalsHandler,
  inputHandler,
  loginHandler,
  logoutHandler,
  paymentHandler,
  printHandler,
  reconciliationHandler,
  reversalHandler,
  storedvalueHandler,
  transactionstatusHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', loginHandler)
  .route('/', logoutHandler)
  .route('/', enableserviceHandler)
  .route('/', adminHandler)
  .route('/', paymentHandler)
  .route('/', cardacquisitionHandler)
  .route('/', storedvalueHandler)
  .route('/', reversalHandler)
  .route('/', reconciliationHandler)
  .route('/', gettotalsHandler)
  .route('/', balanceinquiryHandler)
  .route('/', transactionstatusHandler)
  .route('/', abortHandler)
  .route('/', diagnosisHandler)
  .route('/', displayHandler)
  .route('/', inputHandler)
  .route('/', printHandler)

export default app
