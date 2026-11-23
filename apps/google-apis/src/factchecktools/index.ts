import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1ClaimsSearchRoute,
  getV1alpha1NameRoute,
  getV1alpha1PagesRoute,
  postV1alpha1PagesRoute,
  putV1alpha1NameRoute,
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1ClaimsSearchRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1PagesRouteHandler,
  postV1alpha1PagesRouteHandler,
  putV1alpha1NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1alpha1ClaimsSearchRoute, getV1alpha1ClaimsSearchRouteHandler)
  .openapi(getV1alpha1PagesRoute, getV1alpha1PagesRouteHandler)
  .openapi(postV1alpha1PagesRoute, postV1alpha1PagesRouteHandler)
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(putV1alpha1NameRoute, putV1alpha1NameRouteHandler)

export default app
