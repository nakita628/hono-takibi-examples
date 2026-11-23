import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetDealersByRegionRoute } from '../routes'

const app = new OpenAPIHono()

export const getDealersByRegionHandler = app.openapi(getGetDealersByRegionRoute, (c) => {
  throw new Error('Not implemented')
})
