import { OpenAPIHono } from '@hono/zod-openapi'
import { getSosBucketsUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const sosBucketsUsageHandler = app.openapi(getSosBucketsUsageRoute, (c) => {
  throw new Error('Not implemented')
})
