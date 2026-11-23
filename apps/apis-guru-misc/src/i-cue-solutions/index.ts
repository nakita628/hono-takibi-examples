import { OpenAPIHono } from '@hono/zod-openapi'
import {
  administrationHandler,
  forecastHandler,
  hyperparameterHandler,
  inventoryHandler,
  lifecycleHandler,
  outlierHandler,
  portfolioHandler,
  pricingHandler,
  reportHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', administrationHandler)
  .route('/', forecastHandler)
  .route('/', hyperparameterHandler)
  .route('/', inventoryHandler)
  .route('/', lifecycleHandler)
  .route('/', outlierHandler)
  .route('/', portfolioHandler)
  .route('/', pricingHandler)
  .route('/', reportHandler)

export default app
