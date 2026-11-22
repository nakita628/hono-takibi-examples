import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryRegionDistrictWardRoute } from '../routes'

const app = new OpenAPIHono()

export const streetsInAWardHandler = app.openapi(getCountryRegionDistrictWardRoute, (c) => {
  throw new Error('Not implemented')
})
