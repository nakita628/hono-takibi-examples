import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const updateGroupHandler = app.openapi(postUpdateGroupRoute, (c) => {
  throw new Error('Not implemented')
})
