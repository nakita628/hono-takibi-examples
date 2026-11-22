import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeEarthSatelliteLandsatRoute } from '../routes'

const app = new OpenAPIHono()

export const typeEarthSatelliteLandsatHandler = app.openapi(
  getRepositorySearchTypeEarthSatelliteLandsatRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
