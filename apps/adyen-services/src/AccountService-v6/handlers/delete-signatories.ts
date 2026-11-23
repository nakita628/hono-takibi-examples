import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteSignatoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteSignatoriesHandler = app.openapi(postDeleteSignatoriesRoute, (c) => {
  throw new Error('Not implemented')
})
