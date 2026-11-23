import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientClientIdRoute,
  getClientClientIdTokenKindRoute,
  getDomainDomainnameRoute,
  getFleetFleetnameRoute,
  getTeamTeamnameRoute,
  getTenantTenantnameRoute,
  getUserUsernameRoute,
  getUserUsernameTokenKindRoute,
  postClientRoute,
  postUserRoute,
} from './routes'
import {
  getClientClientIdRouteHandler,
  getClientClientIdTokenKindRouteHandler,
  getDomainDomainnameRouteHandler,
  getFleetFleetnameRouteHandler,
  getTeamTeamnameRouteHandler,
  getTenantTenantnameRouteHandler,
  getUserUsernameRouteHandler,
  getUserUsernameTokenKindRouteHandler,
  postClientRouteHandler,
  postUserRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postClientRoute, postClientRouteHandler)
  .openapi(getClientClientIdRoute, getClientClientIdRouteHandler)
  .openapi(getClientClientIdTokenKindRoute, getClientClientIdTokenKindRouteHandler)
  .openapi(getDomainDomainnameRoute, getDomainDomainnameRouteHandler)
  .openapi(getFleetFleetnameRoute, getFleetFleetnameRouteHandler)
  .openapi(getTeamTeamnameRoute, getTeamTeamnameRouteHandler)
  .openapi(getTenantTenantnameRoute, getTenantTenantnameRouteHandler)
  .openapi(postUserRoute, postUserRouteHandler)
  .openapi(getUserUsernameRoute, getUserUsernameRouteHandler)
  .openapi(getUserUsernameTokenKindRoute, getUserUsernameTokenKindRouteHandler)

export default app
