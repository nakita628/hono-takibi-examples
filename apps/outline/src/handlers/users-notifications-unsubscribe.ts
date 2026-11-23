import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersNotificationsUnsubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const usersNotificationsUnsubscribeHandler = app.openapi(
  postUsersNotificationsUnsubscribeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
