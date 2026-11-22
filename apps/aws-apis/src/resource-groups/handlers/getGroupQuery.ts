import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetGroupQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const getGroupQueryHandler = app.openapi(postGetGroupQueryRoute, (c) => {
  throw new Error('Not implemented')
})
