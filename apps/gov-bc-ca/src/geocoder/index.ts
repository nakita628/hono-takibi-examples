import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAddressesOutputFormatRoute,
  getIntersectionsIntersectionIDOutputFormatRoute,
  getIntersectionsNearestOutputFormatRoute,
  getIntersectionsNearOutputFormatRoute,
  getIntersectionsWithinOutputFormatRoute,
  getOccupantsAddressesOutputFormatRoute,
  getOccupantsNearestOutputFormatRoute,
  getOccupantsNearOutputFormatRoute,
  getOccupantsOccupantIDOutputFormatRoute,
  getOccupantsWithinOutputFormatRoute,
  getParcelsPidsSiteIDOutputFormatRoute,
  getSitesNearestOutputFormatRoute,
  getSitesNearOutputFormatRoute,
  getSitesSiteIDOutputFormatRoute,
  getSitesSiteIDSubsitesOutputFormatRoute,
  getSitesWithinOutputFormatRoute,
} from './routes'
import {
  getAddressesOutputFormatRouteHandler,
  getIntersectionsIntersectionIDOutputFormatRouteHandler,
  getIntersectionsNearestOutputFormatRouteHandler,
  getIntersectionsNearOutputFormatRouteHandler,
  getIntersectionsWithinOutputFormatRouteHandler,
  getOccupantsAddressesOutputFormatRouteHandler,
  getOccupantsNearestOutputFormatRouteHandler,
  getOccupantsNearOutputFormatRouteHandler,
  getOccupantsOccupantIDOutputFormatRouteHandler,
  getOccupantsWithinOutputFormatRouteHandler,
  getParcelsPidsSiteIDOutputFormatRouteHandler,
  getSitesNearestOutputFormatRouteHandler,
  getSitesNearOutputFormatRouteHandler,
  getSitesSiteIDOutputFormatRouteHandler,
  getSitesSiteIDSubsitesOutputFormatRouteHandler,
  getSitesWithinOutputFormatRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAddressesOutputFormatRoute, getAddressesOutputFormatRouteHandler)
  .openapi(getIntersectionsNearOutputFormatRoute, getIntersectionsNearOutputFormatRouteHandler)
  .openapi(
    getIntersectionsNearestOutputFormatRoute,
    getIntersectionsNearestOutputFormatRouteHandler,
  )
  .openapi(getIntersectionsWithinOutputFormatRoute, getIntersectionsWithinOutputFormatRouteHandler)
  .openapi(
    getIntersectionsIntersectionIDOutputFormatRoute,
    getIntersectionsIntersectionIDOutputFormatRouteHandler,
  )
  .openapi(getOccupantsAddressesOutputFormatRoute, getOccupantsAddressesOutputFormatRouteHandler)
  .openapi(getOccupantsNearOutputFormatRoute, getOccupantsNearOutputFormatRouteHandler)
  .openapi(getOccupantsNearestOutputFormatRoute, getOccupantsNearestOutputFormatRouteHandler)
  .openapi(getOccupantsWithinOutputFormatRoute, getOccupantsWithinOutputFormatRouteHandler)
  .openapi(getOccupantsOccupantIDOutputFormatRoute, getOccupantsOccupantIDOutputFormatRouteHandler)
  .openapi(getParcelsPidsSiteIDOutputFormatRoute, getParcelsPidsSiteIDOutputFormatRouteHandler)
  .openapi(getSitesNearOutputFormatRoute, getSitesNearOutputFormatRouteHandler)
  .openapi(getSitesNearestOutputFormatRoute, getSitesNearestOutputFormatRouteHandler)
  .openapi(getSitesWithinOutputFormatRoute, getSitesWithinOutputFormatRouteHandler)
  .openapi(getSitesSiteIDOutputFormatRoute, getSitesSiteIDOutputFormatRouteHandler)
  .openapi(getSitesSiteIDSubsitesOutputFormatRoute, getSitesSiteIDSubsitesOutputFormatRouteHandler)

export default app
