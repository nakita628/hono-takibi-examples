import { OpenAPIHono } from '@hono/zod-openapi'
import { getUdprnUdprnRoute } from '../routes'

const app = new OpenAPIHono()

export const udprnHandler = app.openapi(getUdprnUdprnRoute, (c) => {
  throw new Error('Not implemented')
})
