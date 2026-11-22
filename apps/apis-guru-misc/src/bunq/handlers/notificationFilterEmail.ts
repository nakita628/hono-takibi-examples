import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDNotificationFilterEmailRoute,
  postUserUserIDNotificationFilterEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationFilterEmailHandler = app
  .openapi(getUserUserIDNotificationFilterEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserUserIDNotificationFilterEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
