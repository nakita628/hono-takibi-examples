import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogsSocketAppIdRoute } from '../routes'

const app = new OpenAPIHono()

export const logsSocketHandler = app.openapi(getLogsSocketAppIdRoute, (c) => {
  throw new Error('Not implemented')
})
