import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteValidatedUsersUsernameRoute, postValidatedUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const validatedUsersHandler = app
  .openapi(postValidatedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteValidatedUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
