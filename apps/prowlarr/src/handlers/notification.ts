import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1NotificationIdRoute,
  getApiV1NotificationIdRoute,
  getApiV1NotificationRoute,
  getApiV1NotificationSchemaRoute,
  postApiV1NotificationActionNameRoute,
  postApiV1NotificationRoute,
  postApiV1NotificationTestallRoute,
  postApiV1NotificationTestRoute,
  putApiV1NotificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app
  .openapi(getApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NotificationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1NotificationActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
