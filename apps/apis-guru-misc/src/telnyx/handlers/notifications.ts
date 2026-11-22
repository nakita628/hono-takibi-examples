import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationChannelsIdRoute,
  deleteNotificationProfilesIdRoute,
  deleteNotificationSettingsIdRoute,
  getNotificationChannelsIdRoute,
  getNotificationChannelsRoute,
  getNotificationEventConditionsRoute,
  getNotificationEventsRoute,
  getNotificationProfilesIdRoute,
  getNotificationProfilesRoute,
  getNotificationSettingsIdRoute,
  getNotificationSettingsRoute,
  patchNotificationChannelsIdRoute,
  patchNotificationProfilesIdRoute,
  postNotificationChannelsRoute,
  postNotificationProfilesRoute,
  postNotificationSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationEventConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
