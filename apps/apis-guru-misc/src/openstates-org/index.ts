import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBillsJurisdictionSessionBillIdRoute,
  getBillsOcdBillOpenstatesBillIdRoute,
  getBillsRoute,
  getCommitteesCommitteeIdRoute,
  getCommitteesRoute,
  getEventsEventIdRoute,
  getEventsRoute,
  getJurisdictionsJurisdictionIdRoute,
  getJurisdictionsRoute,
  getMetricsRoute,
  getPeopleGeoRoute,
  getPeopleRoute,
} from './routes'
import {
  getBillsJurisdictionSessionBillIdRouteHandler,
  getBillsOcdBillOpenstatesBillIdRouteHandler,
  getBillsRouteHandler,
  getCommitteesCommitteeIdRouteHandler,
  getCommitteesRouteHandler,
  getEventsEventIdRouteHandler,
  getEventsRouteHandler,
  getJurisdictionsJurisdictionIdRouteHandler,
  getJurisdictionsRouteHandler,
  getMetricsRouteHandler,
  getPeopleGeoRouteHandler,
  getPeopleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBillsRoute, getBillsRouteHandler)
  .openapi(getBillsOcdBillOpenstatesBillIdRoute, getBillsOcdBillOpenstatesBillIdRouteHandler)
  .openapi(getBillsJurisdictionSessionBillIdRoute, getBillsJurisdictionSessionBillIdRouteHandler)
  .openapi(getCommitteesRoute, getCommitteesRouteHandler)
  .openapi(getCommitteesCommitteeIdRoute, getCommitteesCommitteeIdRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getEventsEventIdRoute, getEventsEventIdRouteHandler)
  .openapi(getJurisdictionsRoute, getJurisdictionsRouteHandler)
  .openapi(getJurisdictionsJurisdictionIdRoute, getJurisdictionsJurisdictionIdRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getPeopleRoute, getPeopleRouteHandler)
  .openapi(getPeopleGeoRoute, getPeopleGeoRouteHandler)

export default app
