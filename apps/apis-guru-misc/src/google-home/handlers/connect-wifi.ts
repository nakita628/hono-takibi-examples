import { OpenAPIHono } from '@hono/zod-openapi'
import { postConnectWifiRoute } from '../routes'

const app = new OpenAPIHono()

export const connectWifiHandler = app.openapi(postConnectWifiRoute, (c) => {
  throw new Error('Not implemented')
})
