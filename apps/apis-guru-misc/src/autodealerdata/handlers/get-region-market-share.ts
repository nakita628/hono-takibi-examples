import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRegionMarketShareRoute } from '../routes'

const app = new OpenAPIHono()

export const getRegionMarketShareHandler = app.openapi(getGetRegionMarketShareRoute, (c) => {
  throw new Error('Not implemented')
})
