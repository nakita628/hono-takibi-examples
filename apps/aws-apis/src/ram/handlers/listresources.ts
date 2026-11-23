import { OpenAPIHono } from '@hono/zod-openapi'
import { postListresourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const listresourcesHandler = app.openapi(postListresourcesRoute, (c) => {
  throw new Error('Not implemented')
})
