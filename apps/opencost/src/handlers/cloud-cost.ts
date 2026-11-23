import { OpenAPIHono } from '@hono/zod-openapi'
import { getCloudCostRoute } from '../routes'

const app = new OpenAPIHono()

export const cloudCostHandler = app.openapi(getCloudCostRoute, (c) => {
  throw new Error('Not implemented')
})
