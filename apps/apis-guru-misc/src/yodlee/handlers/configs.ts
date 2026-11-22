import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConfigsNotificationsEventsEventNameRoute,
  getConfigsNotificationsEventsRoute,
  getConfigsPublicKeyRoute,
  postConfigsNotificationsEventsEventNameRoute,
  putConfigsNotificationsEventsEventNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configsHandler = app
  .openapi(getConfigsNotificationsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConfigsNotificationsEventsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigsNotificationsEventsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigsNotificationsEventsEventNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigsPublicKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
