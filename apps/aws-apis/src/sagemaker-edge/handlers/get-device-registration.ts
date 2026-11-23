import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetDeviceRegistrationRoute } from '../routes'

const app = new OpenAPIHono()

export const getDeviceRegistrationHandler = app.openapi(postGetDeviceRegistrationRoute, (c) => {
  throw new Error('Not implemented')
})
