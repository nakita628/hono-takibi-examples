import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSingleTypeMultipleExamplesRoute,
  getSingleTypeSingleExampleRoute,
  postMultipleTypesMultipleExamplesRoute,
  postMultipleTypesSingleExampleRoute,
} from './routes'
import {
  getSingleTypeMultipleExamplesRouteHandler,
  getSingleTypeSingleExampleRouteHandler,
  postMultipleTypesMultipleExamplesRouteHandler,
  postMultipleTypesSingleExampleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postMultipleTypesMultipleExamplesRoute, postMultipleTypesMultipleExamplesRouteHandler)
  .openapi(postMultipleTypesSingleExampleRoute, postMultipleTypesSingleExampleRouteHandler)
  .openapi(getSingleTypeMultipleExamplesRoute, getSingleTypeMultipleExamplesRouteHandler)
  .openapi(getSingleTypeSingleExampleRoute, getSingleTypeSingleExampleRouteHandler)

export default app
