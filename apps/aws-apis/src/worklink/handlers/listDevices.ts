import { OpenAPIHono } from '@hono/zod-openapi'
import { postListDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const listDevicesHandler = app.openapi(postListDevicesRoute, (c) => {
  throw new Error('Not implemented')
})
