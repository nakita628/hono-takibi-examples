import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFindInteractionsRoute,
  getFindPathwaysByLiteratureRoute,
  getFindPathwaysByTextRoute,
  getFindPathwaysByXrefRoute,
  getGetColoredPathwayRoute,
  getGetCurationTagHistoryRoute,
  getGetCurationTagsByNameRoute,
  getGetCurationTagsRoute,
  getGetOntologyTermsByPathwayRoute,
  getGetPathwayAsRoute,
  getGetPathwayHistoryRoute,
  getGetPathwayInfoRoute,
  getGetPathwayRoute,
  getGetPathwaysByOntologyTermRoute,
  getGetPathwaysByParentOntologyTermRoute,
  getGetRecentChangesRoute,
  getGetUserByOrcidRoute,
  getGetXrefListRoute,
  getListOrganismsRoute,
  getListPathwaysRoute,
  getLoginRoute,
  getRemoveCurationTagRoute,
  getRemoveOntologyTagRoute,
  getSaveCurationTagRoute,
  getSaveOntologyTagRoute,
  getUpdatePathwayRoute,
  postCreatePathwayRoute,
} from './routes'
import {
  getFindInteractionsRouteHandler,
  getFindPathwaysByLiteratureRouteHandler,
  getFindPathwaysByTextRouteHandler,
  getFindPathwaysByXrefRouteHandler,
  getGetColoredPathwayRouteHandler,
  getGetCurationTagHistoryRouteHandler,
  getGetCurationTagsByNameRouteHandler,
  getGetCurationTagsRouteHandler,
  getGetOntologyTermsByPathwayRouteHandler,
  getGetPathwayAsRouteHandler,
  getGetPathwayHistoryRouteHandler,
  getGetPathwayInfoRouteHandler,
  getGetPathwayRouteHandler,
  getGetPathwaysByOntologyTermRouteHandler,
  getGetPathwaysByParentOntologyTermRouteHandler,
  getGetRecentChangesRouteHandler,
  getGetUserByOrcidRouteHandler,
  getGetXrefListRouteHandler,
  getListOrganismsRouteHandler,
  getListPathwaysRouteHandler,
  getLoginRouteHandler,
  getRemoveCurationTagRouteHandler,
  getRemoveOntologyTagRouteHandler,
  getSaveCurationTagRouteHandler,
  getSaveOntologyTagRouteHandler,
  getUpdatePathwayRouteHandler,
  postCreatePathwayRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postCreatePathwayRoute, postCreatePathwayRouteHandler)
  .openapi(getFindInteractionsRoute, getFindInteractionsRouteHandler)
  .openapi(getFindPathwaysByLiteratureRoute, getFindPathwaysByLiteratureRouteHandler)
  .openapi(getFindPathwaysByTextRoute, getFindPathwaysByTextRouteHandler)
  .openapi(getFindPathwaysByXrefRoute, getFindPathwaysByXrefRouteHandler)
  .openapi(getGetColoredPathwayRoute, getGetColoredPathwayRouteHandler)
  .openapi(getGetCurationTagHistoryRoute, getGetCurationTagHistoryRouteHandler)
  .openapi(getGetCurationTagsRoute, getGetCurationTagsRouteHandler)
  .openapi(getGetCurationTagsByNameRoute, getGetCurationTagsByNameRouteHandler)
  .openapi(getGetOntologyTermsByPathwayRoute, getGetOntologyTermsByPathwayRouteHandler)
  .openapi(getGetPathwayRoute, getGetPathwayRouteHandler)
  .openapi(getGetPathwayAsRoute, getGetPathwayAsRouteHandler)
  .openapi(getGetPathwayHistoryRoute, getGetPathwayHistoryRouteHandler)
  .openapi(getGetPathwayInfoRoute, getGetPathwayInfoRouteHandler)
  .openapi(getGetPathwaysByOntologyTermRoute, getGetPathwaysByOntologyTermRouteHandler)
  .openapi(getGetPathwaysByParentOntologyTermRoute, getGetPathwaysByParentOntologyTermRouteHandler)
  .openapi(getGetRecentChangesRoute, getGetRecentChangesRouteHandler)
  .openapi(getGetUserByOrcidRoute, getGetUserByOrcidRouteHandler)
  .openapi(getGetXrefListRoute, getGetXrefListRouteHandler)
  .openapi(getListOrganismsRoute, getListOrganismsRouteHandler)
  .openapi(getListPathwaysRoute, getListPathwaysRouteHandler)
  .openapi(getLoginRoute, getLoginRouteHandler)
  .openapi(getRemoveCurationTagRoute, getRemoveCurationTagRouteHandler)
  .openapi(getRemoveOntologyTagRoute, getRemoveOntologyTagRouteHandler)
  .openapi(getSaveCurationTagRoute, getSaveCurationTagRouteHandler)
  .openapi(getSaveOntologyTagRoute, getSaveOntologyTagRouteHandler)
  .openapi(getUpdatePathwayRoute, getUpdatePathwayRouteHandler)

export default app
