import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsIdRoute,
  getNotificationsRoute,
  postNotificationsRoute,
  postNotificationsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
