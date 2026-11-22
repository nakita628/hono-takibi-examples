import { OpenAPIHono } from '@hono/zod-openapi'
import {
  corporateActionsHandler,
  cryptoHandler,
  fixedIncomeHandler,
  logosHandler,
  newsHandler,
  optionHandler,
  screenerHandler,
  stockHandler,
  stockV3Handler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', corporateActionsHandler)
  .route('/', fixedIncomeHandler)
  .route('/', logosHandler)
  .route('/', newsHandler)
  .route('/', optionHandler)
  .route('/', screenerHandler)
  .route('/', cryptoHandler)
  .route('/', stockHandler)
  .route('/', stockV3Handler)

export default app
