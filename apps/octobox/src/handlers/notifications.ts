import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiNotificationsDeleteSelectedJsonRoute,
  getApiNotificationsJsonRoute,
  getApiNotificationsLookupJsonRoute,
  getApiNotificationsMarkReadSelectedJsonRoute,
  getApiNotificationsSyncingJsonRoute,
  getApiNotificationsUnreadCountJsonRoute,
  postApiNotificationsArchiveSelectedJsonRoute,
  postApiNotificationsIdStarJsonRoute,
  postApiNotificationsMuteSelectedJsonRoute,
  postApiNotificationsSyncJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(postApiNotificationsArchiveSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiNotificationsDeleteSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsLookupJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsMarkReadSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNotificationsMuteSelectedJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNotificationsIdStarJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiNotificationsSyncJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsSyncingJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiNotificationsUnreadCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
