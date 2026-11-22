import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationTemplatesIdIndexRoute,
  getNotificationTemplatesIdIndexRoute,
  getNotificationTemplatesIndexRoute,
  patchNotificationTemplatesIdIndexRoute,
  postNotificationTemplatesIdRenderIndexRoute,
  postNotificationTemplatesIndexRoute,
  putNotificationTemplatesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationTemplatesHandler = app
  .openapi(getNotificationTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationTemplatesIdRenderIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
