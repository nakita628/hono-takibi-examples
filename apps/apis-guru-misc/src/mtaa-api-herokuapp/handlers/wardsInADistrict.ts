import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryRegionDistrictRoute } from '../routes'

const app = new OpenAPIHono()

export const wardsInADistrictHandler = app.openapi(getCountryRegionDistrictRoute, (c) => {
  throw new Error('Not implemented')
})
