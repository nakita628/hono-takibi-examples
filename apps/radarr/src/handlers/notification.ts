import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3NotificationIdRoute,
  getApiV3NotificationIdRoute,
  getApiV3NotificationRoute,
  getApiV3NotificationSchemaRoute,
  postApiV3NotificationActionNameRoute,
  postApiV3NotificationRoute,
  postApiV3NotificationTestallRoute,
  postApiV3NotificationTestRoute,
  putApiV3NotificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app
  .openapi(getApiV3NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3NotificationSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationTestallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3NotificationActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
