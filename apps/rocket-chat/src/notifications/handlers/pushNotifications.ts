import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1PushTokenRoute,
  getApiV1PushGetRoute,
  getApiV1PushInfoRoute,
  postApiV1PushTestRoute,
  postApiV1PushTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushNotificationsHandler = app
  .openapi(getApiV1PushGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PushTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PushTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PushInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PushTestRoute, (c) => {
    throw new Error('Not implemented')
  })
