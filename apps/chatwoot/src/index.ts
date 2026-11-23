import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountsHandler,
  apiHandler,
  platformHandler,
  publicHandler,
  surveyHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', platformHandler)
  .route('/', publicHandler)
  .route('/', surveyHandler)
  .route('/', apiHandler)
  .route('/', accountsHandler)

export default app
