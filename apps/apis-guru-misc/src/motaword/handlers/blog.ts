import { OpenAPIHono } from '@hono/zod-openapi'
import { getBlogsRoute } from '../routes'

const app = new OpenAPIHono()

export const blogHandler = app.openapi(getBlogsRoute, (c) => {
  throw new Error('Not implemented')
})
