import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserUserIDNotificationFilterFailureRoute,
  postUserUserIDNotificationFilterFailureRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationFilterFailureHandler = app
  .openapi(postUserUserIDNotificationFilterFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserUserIDNotificationFilterFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
