import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiDeviceBySerialRoute } from '../routes'

const app = new OpenAPIHono()

export const deviceBySerialHandler = app.openapi(getApiDeviceBySerialRoute, (c) => {
  throw new Error('Not implemented')
})
