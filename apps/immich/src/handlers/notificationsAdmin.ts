import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAdminNotificationsRoute,
  postAdminNotificationsTemplatesNamePreviewRoute,
  postAdminNotificationsTemplatesNameRoute,
  postAdminNotificationsTestEmailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsAdminHandler = app
  .openapi(postAdminNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsTemplatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsTemplatesNamePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNotificationsTestEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
