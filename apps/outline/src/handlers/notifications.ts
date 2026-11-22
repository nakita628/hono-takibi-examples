import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postNotificationsListRoute,
  postNotificationsUpdateAllRoute,
  postNotificationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(postNotificationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsUpdateAllRoute, (c) => {
    throw new Error('Not implemented')
  })
