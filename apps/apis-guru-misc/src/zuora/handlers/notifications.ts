import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsEmailTemplatesIdRoute,
  deleteNotificationsHistoryRoute,
  deleteNotificationsNotificationDefinitionsIdRoute,
  getNotificationsEmailTemplatesIdRoute,
  getNotificationsEmailTemplatesRoute,
  getNotificationsHistoryTasksIdRoute,
  getNotificationsNotificationDefinitionsIdRoute,
  getNotificationsNotificationDefinitionsRoute,
  getV1NotificationHistoryCalloutRoute,
  getV1NotificationHistoryEmailRoute,
  postNotificationsEmailTemplatesRoute,
  postNotificationsNotificationDefinitionsRoute,
  putNotificationsEmailTemplatesIdRoute,
  putNotificationsNotificationDefinitionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsEmailTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsEmailTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsHistoryTasksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsNotificationDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsNotificationDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsNotificationDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsNotificationDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsNotificationDefinitionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationHistoryCalloutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NotificationHistoryEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
