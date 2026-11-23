import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getListingViolationRoute,
  getListingViolationSummaryRoute,
  postSuppressListingViolationRoute,
} from './routes'
import {
  getListingViolationRouteHandler,
  getListingViolationSummaryRouteHandler,
  postSuppressListingViolationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getListingViolationRoute, getListingViolationRouteHandler)
  .openapi(getListingViolationSummaryRoute, getListingViolationSummaryRouteHandler)
  .openapi(postSuppressListingViolationRoute, postSuppressListingViolationRouteHandler)

export default app
