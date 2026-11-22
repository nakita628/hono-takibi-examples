import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteGroupHandler = app.openapi(postDeleteGroupRoute, (c) => {
  throw new Error('Not implemented')
})
