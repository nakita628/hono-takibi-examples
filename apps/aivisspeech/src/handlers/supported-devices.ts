import { OpenAPIHono } from '@hono/zod-openapi'
import { getSupportedDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const supportedDevicesHandler = app.openapi(getSupportedDevicesRoute, (c) => {
  throw new Error('Not implemented')
})
