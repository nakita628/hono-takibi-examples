import { OpenAPIHono } from '@hono/zod-openapi'
import { postScanWifiRoute } from '../routes'

const app = new OpenAPIHono()

export const scanWifiHandler = app.openapi(postScanWifiRoute, (c) => {
  throw new Error('Not implemented')
})
