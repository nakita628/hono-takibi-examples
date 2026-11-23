import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1NameRoute,
  getV1beta1ParentAnomaliesRoute,
  getV1beta1ParentErrorIssuesSearchRoute,
  getV1beta1ParentErrorReportsSearchRoute,
  postV1beta1NameQueryRoute,
} from './routes'
import {
  getV1beta1NameRouteHandler,
  getV1beta1ParentAnomaliesRouteHandler,
  getV1beta1ParentErrorIssuesSearchRouteHandler,
  getV1beta1ParentErrorReportsSearchRouteHandler,
  postV1beta1NameQueryRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(postV1beta1NameQueryRoute, postV1beta1NameQueryRouteHandler)
  .openapi(getV1beta1ParentAnomaliesRoute, getV1beta1ParentAnomaliesRouteHandler)
  .openapi(getV1beta1ParentErrorIssuesSearchRoute, getV1beta1ParentErrorIssuesSearchRouteHandler)
  .openapi(getV1beta1ParentErrorReportsSearchRoute, getV1beta1ParentErrorReportsSearchRouteHandler)

export default app
