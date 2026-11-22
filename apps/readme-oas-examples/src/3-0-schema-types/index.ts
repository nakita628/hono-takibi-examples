import { OpenAPIHono } from '@hono/zod-openapi'
import {
  arraysHandler,
  booleansHandler,
  circularReferencesHandler,
  numbersHandler,
  objectsHandler,
  quirksHandler,
  readMeFlavorsHandler,
  stringsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', stringsHandler)
  .route('/', numbersHandler)
  .route('/', booleansHandler)
  .route('/', arraysHandler)
  .route('/', objectsHandler)
  .route('/', circularReferencesHandler)
  .route('/', readMeFlavorsHandler)
  .route('/', quirksHandler)

export default app
