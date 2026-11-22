import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRoute,
  deleteRestApi3NotificationschemeNotificationSchemeIdRoute,
  getRestApi3NotificationschemeIdRoute,
  getRestApi3NotificationschemeProjectRoute,
  getRestApi3NotificationschemeRoute,
  postRestApi3NotificationschemeRoute,
  putRestApi3NotificationschemeIdNotificationRoute,
  putRestApi3NotificationschemeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueNotificationSchemesHandler = app
  .openapi(getRestApi3NotificationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3NotificationschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3NotificationschemeProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3NotificationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3NotificationschemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3NotificationschemeIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3NotificationschemeNotificationSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRestApi3NotificationschemeNotificationSchemeIdNotificationNotificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
