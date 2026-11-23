import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrowthEstimatesRoute } from '../routes'

const app = new OpenAPIHono()

export const growthEstimatesHandler = app.openapi(getGrowthEstimatesRoute, (c) => {
  throw new Error('Not implemented')
})
