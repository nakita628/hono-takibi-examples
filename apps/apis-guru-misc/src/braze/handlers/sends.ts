import { OpenAPIHono } from '@hono/zod-openapi'
import { getSendsDataSeriesRoute } from '../routes'

const app = new OpenAPIHono()

export const sendsHandler = app.openapi(getSendsDataSeriesRoute, (c) => {
  throw new Error('Not implemented')
})
