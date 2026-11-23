import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsIdRoute,
  deleteNotificationsRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  putNotificationsIdRoute,
  putNotificationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(deleteNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
