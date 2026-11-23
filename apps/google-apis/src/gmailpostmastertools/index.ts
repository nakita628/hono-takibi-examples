import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1DomainsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentTrafficStatsRoute,
} from './routes'
import {
  getV1beta1DomainsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentTrafficStatsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1beta1DomainsRoute, getV1beta1DomainsRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(getV1beta1ParentTrafficStatsRoute, getV1beta1ParentTrafficStatsRouteHandler)

export default app
