import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AssetlinksCheckRoute,
  getV1StatementsListRoute,
  postV1AssetlinksBulkCheckRoute,
} from './routes'
import {
  getV1AssetlinksCheckRouteHandler,
  getV1StatementsListRouteHandler,
  postV1AssetlinksBulkCheckRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1AssetlinksBulkCheckRoute, postV1AssetlinksBulkCheckRouteHandler)
  .openapi(getV1AssetlinksCheckRoute, getV1AssetlinksCheckRouteHandler)
  .openapi(getV1StatementsListRoute, getV1StatementsListRouteHandler)

export default app
