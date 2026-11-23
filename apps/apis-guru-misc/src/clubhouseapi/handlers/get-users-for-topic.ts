import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetUsersForTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const getUsersForTopicHandler = app.openapi(getGetUsersForTopicRoute, (c) => {
  throw new Error('Not implemented')
})
