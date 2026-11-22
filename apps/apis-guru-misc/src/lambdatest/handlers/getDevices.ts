import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const getDevicesHandler = app.openapi(getDevicesRoute, (c) => {
  throw new Error('Not implemented')
})
