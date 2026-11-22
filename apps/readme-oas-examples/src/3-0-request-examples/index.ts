import { OpenAPIHono } from '@hono/zod-openapi'
import {
  multipleExamplesHandler,
  multipleMediaTypesHandler,
  requestBodyFormDataExampleHandler,
  singleExampleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', multipleExamplesHandler)
  .route('/', singleExampleHandler)
  .route('/', multipleMediaTypesHandler)
  .route('/', requestBodyFormDataExampleHandler)

export default app
