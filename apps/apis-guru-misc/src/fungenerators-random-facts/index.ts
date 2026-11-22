import { OpenAPIHono } from '@hono/zod-openapi'
import {
  factOfTheDayHandler,
  numberFactsHandler,
  onThisDayHandler,
  privateFactsHandler,
  randomFactsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', privateFactsHandler)
  .route('/', randomFactsHandler)
  .route('/', factOfTheDayHandler)
  .route('/', numberFactsHandler)
  .route('/', onThisDayHandler)

export default app
