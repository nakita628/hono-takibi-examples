import { OpenAPIHono } from '@hono/zod-openapi'
import { getStopScanIdRoute } from '../routes'

const app = new OpenAPIHono()

export const stopHandler = app.openapi(getStopScanIdRoute, (c) => {
  throw new Error('Not implemented')
})
