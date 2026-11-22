import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarTrafficAnomaliesLocationsRoute,
  getRadarTrafficAnomaliesRoute,
  getRadarTrafficAnomaliesUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarTrafficAnomaliesHandler = app
  .openapi(getRadarTrafficAnomaliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarTrafficAnomaliesLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarTrafficAnomaliesUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
