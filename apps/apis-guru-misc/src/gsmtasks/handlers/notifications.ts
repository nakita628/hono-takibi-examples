import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsIdIndexRoute,
  getNotificationsIndexRoute,
  postNotificationsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
