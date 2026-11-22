import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2MonitorHealthRoute } from '../routes'

const app = new OpenAPIHono()

export const monitorHandler = app.openapi(getApiV2MonitorHealthRoute, (c) => {
  throw new Error('Not implemented')
})
