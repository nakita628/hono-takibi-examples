import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAssetsIdRoute,
  getAssetsRoute,
  getAssetTypesRoute,
  getSettingsRoute,
  postAssetsRoute,
  postAssetTypesRoute,
} from './routes'
import {
  getAssetsIdRouteHandler,
  getAssetsRouteHandler,
  getAssetTypesRouteHandler,
  getSettingsRouteHandler,
  postAssetsRouteHandler,
  postAssetTypesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAssetsRoute, getAssetsRouteHandler)
  .openapi(postAssetsRoute, postAssetsRouteHandler)
  .openapi(getAssetsIdRoute, getAssetsIdRouteHandler)
  .openapi(getAssetTypesRoute, getAssetTypesRouteHandler)
  .openapi(postAssetTypesRoute, postAssetTypesRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)

export default app
