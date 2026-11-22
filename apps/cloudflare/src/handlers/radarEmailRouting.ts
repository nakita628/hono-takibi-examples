import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarEmailRoutingSummaryArcRoute,
  getRadarEmailRoutingSummaryDimensionRoute,
  getRadarEmailRoutingSummaryDkimRoute,
  getRadarEmailRoutingSummaryDmarcRoute,
  getRadarEmailRoutingSummaryEncryptedRoute,
  getRadarEmailRoutingSummaryIpVersionRoute,
  getRadarEmailRoutingSummarySpfRoute,
  getRadarEmailRoutingTimeseriesGroupsArcRoute,
  getRadarEmailRoutingTimeseriesGroupsDimensionRoute,
  getRadarEmailRoutingTimeseriesGroupsDkimRoute,
  getRadarEmailRoutingTimeseriesGroupsDmarcRoute,
  getRadarEmailRoutingTimeseriesGroupsEncryptedRoute,
  getRadarEmailRoutingTimeseriesGroupsIpVersionRoute,
  getRadarEmailRoutingTimeseriesGroupsSpfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarEmailRoutingHandler = app
  .openapi(getRadarEmailRoutingSummaryArcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingSummaryDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingSummaryDmarcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingSummaryEncryptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingSummaryIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingSummarySpfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsArcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsDkimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsDmarcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsEncryptedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsSpfRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarEmailRoutingTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
