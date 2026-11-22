import { OpenAPIHono } from '@hono/zod-openapi'
import {
  baseConversionHandler,
  numberChecksHandler,
  numberFactsHandler,
  numberGenerationHandler,
  numberOfTheDayHandler,
  numberSystemsConversionHandler,
  piHandler,
  primeHandler,
  spellHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', baseConversionHandler)
  .route('/', spellHandler)
  .route('/', numberFactsHandler)
  .route('/', numberChecksHandler)
  .route('/', numberOfTheDayHandler)
  .route('/', numberSystemsConversionHandler)
  .route('/', piHandler)
  .route('/', primeHandler)
  .route('/', numberGenerationHandler)

export default app
