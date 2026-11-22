import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminEmailSubscriptionSubscriptionRoute,
  getApiAdminNotificationsRoute,
  postApiAdminNotificationsReadRoute,
  putApiAdminEmailSubscriptionSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getApiAdminNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminNotificationsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminEmailSubscriptionSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminEmailSubscriptionSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
