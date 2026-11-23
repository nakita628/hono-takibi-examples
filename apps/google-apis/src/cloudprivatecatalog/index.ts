import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1ResourceCatalogsSearchRoute,
  getV1beta1ResourceProductsSearchRoute,
  getV1beta1ResourceVersionsSearchRoute,
} from './routes'
import {
  getV1beta1ResourceCatalogsSearchRouteHandler,
  getV1beta1ResourceProductsSearchRouteHandler,
  getV1beta1ResourceVersionsSearchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1ResourceCatalogsSearchRoute, getV1beta1ResourceCatalogsSearchRouteHandler)
  .openapi(getV1beta1ResourceProductsSearchRoute, getV1beta1ResourceProductsSearchRouteHandler)
  .openapi(getV1beta1ResourceVersionsSearchRoute, getV1beta1ResourceVersionsSearchRouteHandler)

export default app
