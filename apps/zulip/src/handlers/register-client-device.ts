import { OpenAPIHono } from '@hono/zod-openapi'
import { postRegisterClientDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const registerClientDeviceHandler = app.openapi(postRegisterClientDeviceRoute, (c) => {
  throw new Error('Not implemented')
})
