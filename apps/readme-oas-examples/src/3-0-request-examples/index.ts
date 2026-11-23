import { OpenAPIHono } from '@hono/zod-openapi'
import {
  parameterExamplesHandler,
  requestBodyFormDataExampleHandler,
  requestBodyHandler,
  requestBodyMultiMediaTypesHandler,
  requestBodyPrimitiveExampleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', parameterExamplesHandler)
  .route('/', requestBodyHandler)
  .route('/', requestBodyPrimitiveExampleHandler)
  .route('/', requestBodyMultiMediaTypesHandler)
  .route('/', requestBodyFormDataExampleHandler)

export default app
