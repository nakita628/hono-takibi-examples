import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const searchUsersHandler = app.openapi(postSearchUsersRoute, (c) => {
  throw new Error('Not implemented')
})
