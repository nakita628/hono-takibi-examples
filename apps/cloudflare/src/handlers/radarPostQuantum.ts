import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarPostQuantumOriginSummaryDimensionRoute,
  getRadarPostQuantumOriginTimeseriesGroupsDimensionRoute,
  getRadarPostQuantumTlsSupportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarPostQuantumHandler = app
  .openapi(getRadarPostQuantumOriginSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarPostQuantumOriginTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarPostQuantumTlsSupportRoute, (c) => {
    throw new Error('Not implemented')
  })
