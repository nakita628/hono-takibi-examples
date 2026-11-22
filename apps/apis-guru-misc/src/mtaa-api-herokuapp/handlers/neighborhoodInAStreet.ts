import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryRegionDistrictWardStreetRoute } from '../routes'

const app = new OpenAPIHono()

export const neighborhoodInAStreetHandler = app.openapi(
  getCountryRegionDistrictWardStreetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
