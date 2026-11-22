import { OpenAPIHono } from '@hono/zod-openapi'
import { getRadarGeolocationsGeoIdRoute, getRadarGeolocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const radarGeolocationsHandler = app
  .openapi(getRadarGeolocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarGeolocationsGeoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
