import { OpenAPIHono } from '@hono/zod-openapi'
import { putUsersPasswordResetTokenJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(putUsersPasswordResetTokenJsonRoute, (c) => {
  throw new Error('Not implemented')
})
