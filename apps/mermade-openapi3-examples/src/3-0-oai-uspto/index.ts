import { OpenAPIHono } from '@hono/zod-openapi'
import { getDatasetVersionFieldsRoute, getRoute, postDatasetVersionRecordsRoute } from './routes'
import {
  getDatasetVersionFieldsRouteHandler,
  getRouteHandler,
  postDatasetVersionRecordsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getDatasetVersionFieldsRoute, getDatasetVersionFieldsRouteHandler)
  .openapi(postDatasetVersionRecordsRoute, postDatasetVersionRecordsRouteHandler)

export default app
