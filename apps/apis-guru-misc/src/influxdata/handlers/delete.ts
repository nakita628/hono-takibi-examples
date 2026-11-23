import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteHandler = app.openapi(postDeleteRoute, (c) => {
  throw new Error('Not implemented')
})
