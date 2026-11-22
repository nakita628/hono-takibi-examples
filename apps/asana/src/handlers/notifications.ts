import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUsersUserGidNotificationsRoute,
  postUsersUserGidNotificationsMarkReadRoute,
  postUsersUserGidNotificationsMarkUnreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getUsersUserGidNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserGidNotificationsMarkReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserGidNotificationsMarkUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
