import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNotificationsIdBoardRoute,
  getNotificationsIdCardRoute,
  getNotificationsIdFieldRoute,
  getNotificationsIdListRoute,
  getNotificationsIdMemberCreatorRoute,
  getNotificationsIdMemberRoute,
  getNotificationsIdOrganizationRoute,
  getNotificationsIdRoute,
  postNotificationsAllReadRoute,
  putNotificationsIdRoute,
  putNotificationsIdUnreadRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsAllReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsIdUnreadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdBoardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdCardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdMemberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdMemberCreatorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsIdOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
