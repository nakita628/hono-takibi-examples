import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2LogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(getV2LogsRoute, (c) => {
  throw new Error('Not implemented')
})
