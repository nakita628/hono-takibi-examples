import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersNotificationsSubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const usersNotificationsSubscribeHandler = app.openapi(
  postUsersNotificationsSubscribeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
