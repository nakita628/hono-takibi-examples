import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsIdRoute,
  getNotificationsRoute,
  getNotificationsTypesRoute,
  postNotificationsRoute,
  postNotificationsTestRoute,
  putNotificationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
