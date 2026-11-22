import { OpenAPIHono } from '@hono/zod-openapi'
import { getVaultLogsRoute } from '../routes'

const app = new OpenAPIHono()

export const logsHandler = app.openapi(getVaultLogsRoute, (c) => {
  throw new Error('Not implemented')
})
