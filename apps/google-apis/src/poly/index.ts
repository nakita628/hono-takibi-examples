import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AssetsRoute,
  getV1NameAssetsRoute,
  getV1NameLikedassetsRoute,
  getV1NameRoute,
} from './routes'
import {
  getV1AssetsRouteHandler,
  getV1NameAssetsRouteHandler,
  getV1NameLikedassetsRouteHandler,
  getV1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AssetsRoute, getV1AssetsRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1NameAssetsRoute, getV1NameAssetsRouteHandler)
  .openapi(getV1NameLikedassetsRoute, getV1NameLikedassetsRouteHandler)

export default app
