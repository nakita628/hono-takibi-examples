import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDomainsSearchRoute,
  getDomainsTldZoneIdDownloadRoute,
  getDomainsTldZoneIdRoute,
  getDomainsTldZoneIdSearchRoute,
  getDomainsUpdatesAddedDownloadRoute,
  getDomainsUpdatesAddedRoute,
  getDomainsUpdatesDeletedDownloadRoute,
  getDomainsUpdatesDeletedRoute,
  getDomainsUpdatesListRoute,
  getInfoApiRoute,
  getInfoStatIndexRoute,
  getInfoStatZoneRoute,
  getInfoTldIndexRoute,
  getInfoTldZoneRoute,
} from './routes'
import {
  getDomainsSearchRouteHandler,
  getDomainsTldZoneIdDownloadRouteHandler,
  getDomainsTldZoneIdRouteHandler,
  getDomainsTldZoneIdSearchRouteHandler,
  getDomainsUpdatesAddedDownloadRouteHandler,
  getDomainsUpdatesAddedRouteHandler,
  getDomainsUpdatesDeletedDownloadRouteHandler,
  getDomainsUpdatesDeletedRouteHandler,
  getDomainsUpdatesListRouteHandler,
  getInfoApiRouteHandler,
  getInfoStatIndexRouteHandler,
  getInfoStatZoneRouteHandler,
  getInfoTldIndexRouteHandler,
  getInfoTldZoneRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDomainsSearchRoute, getDomainsSearchRouteHandler)
  .openapi(getDomainsTldZoneIdRoute, getDomainsTldZoneIdRouteHandler)
  .openapi(getDomainsTldZoneIdDownloadRoute, getDomainsTldZoneIdDownloadRouteHandler)
  .openapi(getDomainsTldZoneIdSearchRoute, getDomainsTldZoneIdSearchRouteHandler)
  .openapi(getDomainsUpdatesAddedRoute, getDomainsUpdatesAddedRouteHandler)
  .openapi(getDomainsUpdatesAddedDownloadRoute, getDomainsUpdatesAddedDownloadRouteHandler)
  .openapi(getDomainsUpdatesDeletedRoute, getDomainsUpdatesDeletedRouteHandler)
  .openapi(getDomainsUpdatesDeletedDownloadRoute, getDomainsUpdatesDeletedDownloadRouteHandler)
  .openapi(getDomainsUpdatesListRoute, getDomainsUpdatesListRouteHandler)
  .openapi(getInfoApiRoute, getInfoApiRouteHandler)
  .openapi(getInfoStatIndexRoute, getInfoStatIndexRouteHandler)
  .openapi(getInfoStatZoneRoute, getInfoStatZoneRouteHandler)
  .openapi(getInfoTldIndexRoute, getInfoTldIndexRouteHandler)
  .openapi(getInfoTldZoneRoute, getInfoTldZoneRouteHandler)

export default app
