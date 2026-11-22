import { OpenAPIHono } from '@hono/zod-openapi'
import { postListresourcetypesRoute } from '../routes'

const app = new OpenAPIHono()

export const listresourcetypesHandler = app.openapi(postListresourcetypesRoute, (c) => {
  throw new Error('Not implemented')
})
