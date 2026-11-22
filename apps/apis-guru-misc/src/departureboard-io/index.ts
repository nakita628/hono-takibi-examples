import { OpenAPIHono } from '@hono/zod-openapi'
import {
  departuresArrivalsHandler,
  fastestAndNextDeparturesHandler,
  serviceInformationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', departuresArrivalsHandler)
  .route('/', fastestAndNextDeparturesHandler)
  .route('/', serviceInformationHandler)

export default app
