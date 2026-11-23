import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationProfilesIdRoute,
  getNotificationProfilesIdRoute,
  getNotificationProfilesRoute,
  patchNotificationProfilesIdRoute,
  postNotificationProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationProfilesHandler = app
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
