import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsNewRoute,
  getNotificationsRoute,
  getNotificationsThreadsIdRoute,
  patchNotificationsThreadsIdRoute,
  putNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsThreadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationsThreadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
