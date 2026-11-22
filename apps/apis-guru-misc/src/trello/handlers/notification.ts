import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsIdNotificationBoardFieldRoute,
  getNotificationsIdNotificationBoardRoute,
  getNotificationsIdNotificationCardFieldRoute,
  getNotificationsIdNotificationCardRoute,
  getNotificationsIdNotificationDisplayRoute,
  getNotificationsIdNotificationEntitiesRoute,
  getNotificationsIdNotificationFieldRoute,
  getNotificationsIdNotificationListFieldRoute,
  getNotificationsIdNotificationListRoute,
  getNotificationsIdNotificationMemberCreatorFieldRoute,
  getNotificationsIdNotificationMemberCreatorRoute,
  getNotificationsIdNotificationMemberFieldRoute,
  getNotificationsIdNotificationMemberRoute,
  getNotificationsIdNotificationOrganizationFieldRoute,
  getNotificationsIdNotificationOrganizationRoute,
  getNotificationsIdNotificationRoute,
  postNotificationsAllReadRoute,
  putNotificationsIdNotificationRoute,
  putNotificationsIdNotificationUnreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationHandler = app
  .openapi(postNotificationsAllReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsIdNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationBoardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationCardFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationDisplayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationListFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationMemberFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationMemberCreatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationMemberCreatorFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationOrganizationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsIdNotificationUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdNotificationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
