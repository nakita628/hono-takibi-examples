import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataDivisionsDivisionIdRoute,
  getDataDivisionsGroupedbypartyRoute,
  getDataDivisionsMembervotingRoute,
  getDataDivisionsSearchRoute,
  getDataDivisionsSearchTotalResultsRoute,
} from './routes'
import {
  getDataDivisionsDivisionIdRouteHandler,
  getDataDivisionsGroupedbypartyRouteHandler,
  getDataDivisionsMembervotingRouteHandler,
  getDataDivisionsSearchRouteHandler,
  getDataDivisionsSearchTotalResultsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDataDivisionsGroupedbypartyRoute, getDataDivisionsGroupedbypartyRouteHandler)
  .openapi(getDataDivisionsMembervotingRoute, getDataDivisionsMembervotingRouteHandler)
  .openapi(getDataDivisionsSearchRoute, getDataDivisionsSearchRouteHandler)
  .openapi(getDataDivisionsSearchTotalResultsRoute, getDataDivisionsSearchTotalResultsRouteHandler)
  .openapi(getDataDivisionsDivisionIdRoute, getDataDivisionsDivisionIdRouteHandler)

export default app
