import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetIdentityNotificationTopicRoute,
  postActionSetIdentityNotificationTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetIdentityNotificationTopicHandler = app
  .openapi(getActionSetIdentityNotificationTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetIdentityNotificationTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
