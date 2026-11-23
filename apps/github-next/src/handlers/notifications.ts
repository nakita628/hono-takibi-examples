import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsThreadsThreadIdRoute,
  deleteNotificationsThreadsThreadIdSubscriptionRoute,
  getNotificationsRoute,
  getNotificationsThreadsThreadIdRoute,
  getNotificationsThreadsThreadIdSubscriptionRoute,
  patchNotificationsThreadsThreadIdRoute,
  putNotificationsRoute,
  putNotificationsThreadsThreadIdSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationsThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsThreadsThreadIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsThreadsThreadIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsThreadsThreadIdSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
