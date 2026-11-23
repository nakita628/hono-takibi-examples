import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute,
  deleteNotificationEndpointsEndpointIDRoute,
  getNotificationEndpointsEndpointIDLabelsRoute,
  getNotificationEndpointsEndpointIDRoute,
  getNotificationEndpointsRoute,
  patchNotificationEndpointsEndpointIDRoute,
  postNotificationEndpointsEndpointIDLabelsRoute,
  postNotificationEndpointsRoute,
  putNotificationEndpointsEndpointIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationEndpointsHandler = app
  .openapi(getNotificationEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationEndpointsEndpointIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationEndpointsEndpointIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchNotificationEndpointsEndpointIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationEndpointsEndpointIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationEndpointsEndpointIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationEndpointsEndpointIDLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationEndpointsEndpointIDLabelsLabelIDRoute, (c) => {
    throw new Error('Not implemented')
  })
