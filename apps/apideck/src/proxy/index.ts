import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProxyRoute,
  getProxyRoute,
  optionsProxyRoute,
  patchProxyRoute,
  postProxyRoute,
  putProxyRoute,
} from './routes'
import {
  deleteProxyRouteHandler,
  getProxyRouteHandler,
  optionsProxyRouteHandler,
  patchProxyRouteHandler,
  postProxyRouteHandler,
  putProxyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteProxyRoute, deleteProxyRouteHandler)
  .openapi(getProxyRoute, getProxyRouteHandler)
  .openapi(optionsProxyRoute, optionsProxyRouteHandler)
  .openapi(patchProxyRoute, patchProxyRouteHandler)
  .openapi(postProxyRoute, postProxyRouteHandler)
  .openapi(putProxyRoute, putProxyRouteHandler)

export default app
