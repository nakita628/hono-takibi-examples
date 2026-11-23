import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsServicesRoute,
  getNotificationsTypesRoute,
  getNotificationsUserIdRoute,
  getNotificationsUserIdSummaryRoute,
  postNotificationsAdminRoute,
  postNotificationsUserIdReadRoute,
  postNotificationsUserIdUnreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(postNotificationsAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsUserIdReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsUserIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsUserIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
