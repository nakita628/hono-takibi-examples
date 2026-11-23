import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetAppDeviceIdRoute } from '../routes'

const app = new OpenAPIHono()

export const getAppDeviceIdHandler = app.openapi(postGetAppDeviceIdRoute, (c) => {
  throw new Error('Not implemented')
})
