import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsIdRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  patchNotificationsIdRoute,
  postNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
