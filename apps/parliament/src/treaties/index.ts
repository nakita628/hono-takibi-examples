import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBusinessItemIdRoute,
  getApiGovernmentOrganisationRoute,
  getApiSeriesMembershipRoute,
  getApiTreatyIdBusinessItemsRoute,
  getApiTreatyIdRoute,
  getApiTreatyRoute,
} from './routes'
import {
  getApiBusinessItemIdRouteHandler,
  getApiGovernmentOrganisationRouteHandler,
  getApiSeriesMembershipRouteHandler,
  getApiTreatyIdBusinessItemsRouteHandler,
  getApiTreatyIdRouteHandler,
  getApiTreatyRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiBusinessItemIdRoute, getApiBusinessItemIdRouteHandler)
  .openapi(getApiGovernmentOrganisationRoute, getApiGovernmentOrganisationRouteHandler)
  .openapi(getApiSeriesMembershipRoute, getApiSeriesMembershipRouteHandler)
  .openapi(getApiTreatyRoute, getApiTreatyRouteHandler)
  .openapi(getApiTreatyIdRoute, getApiTreatyIdRouteHandler)
  .openapi(getApiTreatyIdBusinessItemsRoute, getApiTreatyIdBusinessItemsRouteHandler)

export default app
