import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountPortfolioHandler,
  financialInstrumentDefinitionsHandler,
  marketDataHandler,
  oAuthHandler,
  orderMarginRequirementsHandler,
  ordersHandler,
  tradesHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountPortfolioHandler)
  .route('/', orderMarginRequirementsHandler)
  .route('/', ordersHandler)
  .route('/', tradesHandler)
  .route('/', marketDataHandler)
  .route('/', oAuthHandler)
  .route('/', financialInstrumentDefinitionsHandler)

export default app
