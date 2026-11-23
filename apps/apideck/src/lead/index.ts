import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLeadLeadsIdRoute,
  getLeadLeadsIdRoute,
  getLeadLeadsRoute,
  patchLeadLeadsIdRoute,
  postLeadLeadsRoute,
} from './routes'
import {
  deleteLeadLeadsIdRouteHandler,
  getLeadLeadsIdRouteHandler,
  getLeadLeadsRouteHandler,
  patchLeadLeadsIdRouteHandler,
  postLeadLeadsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getLeadLeadsRoute, getLeadLeadsRouteHandler)
  .openapi(postLeadLeadsRoute, postLeadLeadsRouteHandler)
  .openapi(deleteLeadLeadsIdRoute, deleteLeadLeadsIdRouteHandler)
  .openapi(getLeadLeadsIdRoute, getLeadLeadsIdRouteHandler)
  .openapi(patchLeadLeadsIdRoute, patchLeadLeadsIdRouteHandler)

export default app
