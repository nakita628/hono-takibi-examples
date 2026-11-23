import { OpenAPIHono } from '@hono/zod-openapi'
import {
  multipleTypesMultipleExamplesHandler,
  multipleTypesSingleExampleHandler,
  singleTypeMultipleExamplesHandler,
  singleTypeSingleExampleHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', multipleTypesMultipleExamplesHandler)
  .route('/', multipleTypesSingleExampleHandler)
  .route('/', singleTypeMultipleExamplesHandler)
  .route('/', singleTypeSingleExampleHandler)

export default app
