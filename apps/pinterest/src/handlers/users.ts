import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUsernameInterestsFollowRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getUsersUsernameInterestsFollowRoute, (c) => {
  throw new Error('Not implemented')
})
