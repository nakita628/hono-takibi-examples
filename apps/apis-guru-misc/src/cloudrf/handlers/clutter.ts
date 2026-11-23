import { OpenAPIHono } from '@hono/zod-openapi'
import { postClutterAddRoute } from '../routes'

const app = new OpenAPIHono()

export const clutterHandler = app.openapi(postClutterAddRoute, (c) => {
  throw new Error('Not implemented')
})
