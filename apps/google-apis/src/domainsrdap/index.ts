import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AutnumAutnumIdRoute,
  getV1DomainDomainNameRoute,
  getV1DomainsRoute,
  getV1EntitiesRoute,
  getV1EntityEntityIdRoute,
  getV1HelpRoute,
  getV1IpIpIdIpId1Route,
  getV1IpRoute,
  getV1NameserverNameserverIdRoute,
  getV1NameserversRoute,
} from './routes'
import {
  getV1AutnumAutnumIdRouteHandler,
  getV1DomainDomainNameRouteHandler,
  getV1DomainsRouteHandler,
  getV1EntitiesRouteHandler,
  getV1EntityEntityIdRouteHandler,
  getV1HelpRouteHandler,
  getV1IpIpIdIpId1RouteHandler,
  getV1IpRouteHandler,
  getV1NameserverNameserverIdRouteHandler,
  getV1NameserversRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1AutnumAutnumIdRoute, getV1AutnumAutnumIdRouteHandler)
  .openapi(getV1DomainDomainNameRoute, getV1DomainDomainNameRouteHandler)
  .openapi(getV1DomainsRoute, getV1DomainsRouteHandler)
  .openapi(getV1EntitiesRoute, getV1EntitiesRouteHandler)
  .openapi(getV1EntityEntityIdRoute, getV1EntityEntityIdRouteHandler)
  .openapi(getV1HelpRoute, getV1HelpRouteHandler)
  .openapi(getV1IpRoute, getV1IpRouteHandler)
  .openapi(getV1IpIpIdIpId1Route, getV1IpIpIdIpId1RouteHandler)
  .openapi(getV1NameserverNameserverIdRoute, getV1NameserverNameserverIdRouteHandler)
  .openapi(getV1NameserversRoute, getV1NameserversRouteHandler)

export default app
