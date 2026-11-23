import { OpenAPIHono } from '@hono/zod-openapi'
import { getSatelliteRoute, getSatelliteSatelliteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const satelliteHandler = app
  .openapi(getSatelliteSatelliteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSatelliteRoute, (c) => {
    throw new Error('Not implemented')
  })
