import { OpenAPIHono } from '@hono/zod-openapi'
import { getIpBlocklistDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const ipBlocklistDownloadHandler = app.openapi(getIpBlocklistDownloadRoute, (c) => {
  throw new Error('Not implemented')
})
