import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountryRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const districtsInRegionHandler = app.openapi(getCountryRegionRoute, (c) => {
  throw new Error('Not implemented')
})
