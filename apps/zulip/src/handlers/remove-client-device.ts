import { OpenAPIHono } from '@hono/zod-openapi'
import { postRemoveClientDeviceRoute } from '../routes'

const app = new OpenAPIHono()

export const removeClientDeviceHandler = app.openapi(postRemoveClientDeviceRoute, (c) => {
  throw new Error('Not implemented')
})
