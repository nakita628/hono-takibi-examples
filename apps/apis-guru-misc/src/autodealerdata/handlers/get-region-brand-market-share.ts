import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetRegionBrandMarketShareRoute } from '../routes'

const app = new OpenAPIHono()

export const getRegionBrandMarketShareHandler = app.openapi(
  getGetRegionBrandMarketShareRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
