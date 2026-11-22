import { OpenAPIHono } from '@hono/zod-openapi'
import { getHardwareRoute } from '../routes'

const app = new OpenAPIHono()

export const hardwareHandler = app.openapi(getHardwareRoute, (c) => {
  throw new Error('Not implemented')
})
