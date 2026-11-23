import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsEmailhooksOwnerIdIdRoute,
  deleteNotificationsWebhooksOwnerIdIdRoute,
  getNotificationsEmailhooksOwnerIdRoute,
  getNotificationsInfoEventsRoute,
  getNotificationsInfoWebhookformatsRoute,
  getNotificationsWebhooksOwnerIdRoute,
  postNotificationsEmailhooksOwnerIdRoute,
  postNotificationsWebhooksOwnerIdRoute,
  putNotificationsEmailhooksOwnerIdIdRoute,
  putNotificationsWebhooksOwnerIdIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsEmailhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsEmailhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsEmailhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsEmailhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsInfoEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsInfoWebhookformatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsWebhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsWebhooksOwnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsWebhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsWebhooksOwnerIdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
