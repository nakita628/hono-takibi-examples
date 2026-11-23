import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  deleteV1ParentProductsNameRoute,
  getV1NameRoute,
  getV1ParentProductCertificationsRoute,
  getV1ParentProductsNameRoute,
  getV1ParentProductsRoute,
  patchV1NameRoute,
  putV1ParentProductsNameRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  deleteV1ParentProductsNameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentProductCertificationsRouteHandler,
  getV1ParentProductsNameRouteHandler,
  getV1ParentProductsRouteHandler,
  patchV1NameRouteHandler,
  putV1ParentProductsNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1ParentProductCertificationsRoute, getV1ParentProductCertificationsRouteHandler)
  .openapi(getV1ParentProductsRoute, getV1ParentProductsRouteHandler)
  .openapi(deleteV1ParentProductsNameRoute, deleteV1ParentProductsNameRouteHandler)
  .openapi(getV1ParentProductsNameRoute, getV1ParentProductsNameRouteHandler)
  .openapi(putV1ParentProductsNameRoute, putV1ParentProductsNameRouteHandler)

export default app
