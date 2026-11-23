import { OpenAPIHono } from '@hono/zod-openapi'
import {
  businessLinesHandler,
  documentsHandler,
  legalEntitiesHandler,
  themesHandler,
  transferInstrumentsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', businessLinesHandler)
  .route('/', documentsHandler)
  .route('/', legalEntitiesHandler)
  .route('/', themesHandler)
  .route('/', transferInstrumentsHandler)

export default app
