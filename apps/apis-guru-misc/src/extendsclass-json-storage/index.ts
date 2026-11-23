import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBinIdRoute,
  getBinIdRoute,
  patchBinIdRoute,
  postBinRoute,
  putBinIdRoute,
} from './routes'
import {
  deleteBinIdRouteHandler,
  getBinIdRouteHandler,
  patchBinIdRouteHandler,
  postBinRouteHandler,
  putBinIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postBinRoute, postBinRouteHandler)
  .openapi(deleteBinIdRoute, deleteBinIdRouteHandler)
  .openapi(getBinIdRoute, getBinIdRouteHandler)
  .openapi(patchBinIdRoute, patchBinIdRouteHandler)
  .openapi(putBinIdRoute, putBinIdRouteHandler)

export default app
