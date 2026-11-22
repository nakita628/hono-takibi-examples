import { OpenAPIHono } from '@hono/zod-openapi'
import {
  businessItemHandler,
  layingBodyHandler,
  procedureHandler,
  proposedNegativeStatutoryInstrumentHandler,
  statutoryInstrumentHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessItemHandler)
  .route('/', layingBodyHandler)
  .route('/', procedureHandler)
  .route('/', proposedNegativeStatutoryInstrumentHandler)
  .route('/', statutoryInstrumentHandler)

export default app
