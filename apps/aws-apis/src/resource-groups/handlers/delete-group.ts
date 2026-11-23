import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteGroupHandler = app.openapi(postDeleteGroupRoute, (c) => {
  throw new Error('Not implemented')
})
