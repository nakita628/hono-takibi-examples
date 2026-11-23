import { OpenAPIHono } from '@hono/zod-openapi'
import { postImageResizeRoute } from '../routes'

const app = new OpenAPIHono()

export const imageResizeHandler = app.openapi(postImageResizeRoute, (c) => {
  throw new Error('Not implemented')
})
