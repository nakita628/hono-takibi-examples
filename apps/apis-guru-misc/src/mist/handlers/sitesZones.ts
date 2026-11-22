import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdZonesZoneIdRoute,
  getApiV1SitesSiteIdZonesRoute,
  getApiV1SitesSiteIdZonesZoneIdRoute,
  getApiV1SitesSiteIdZoneTypeCountRoute,
  getApiV1SitesSiteIdZoneTypeVisitsSearchRoute,
  postApiV1SitesSiteIdZonesRoute,
  putApiV1SitesSiteIdZonesZoneIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesZonesHandler = app
  .openapi(getApiV1SitesSiteIdZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZoneTypeCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdZoneTypeVisitsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
