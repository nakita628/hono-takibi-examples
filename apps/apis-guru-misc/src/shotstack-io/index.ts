import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAssetsIdRoute,
  getAssetsIdRoute,
  getAssetsRenderIdRoute,
  getRenderIdRoute,
  postRenderRoute,
} from './routes'
import {
  deleteAssetsIdRouteHandler,
  getAssetsIdRouteHandler,
  getAssetsRenderIdRouteHandler,
  getRenderIdRouteHandler,
  postRenderRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAssetsRenderIdRoute, getAssetsRenderIdRouteHandler)
  .openapi(deleteAssetsIdRoute, deleteAssetsIdRouteHandler)
  .openapi(getAssetsIdRoute, getAssetsIdRouteHandler)
  .openapi(postRenderRoute, postRenderRouteHandler)
  .openapi(getRenderIdRoute, getRenderIdRouteHandler)

export default app
