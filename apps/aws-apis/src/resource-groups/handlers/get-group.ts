import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const getGroupHandler = app.openapi(postGetGroupRoute, (c) => {
  throw new Error('Not implemented')
})
