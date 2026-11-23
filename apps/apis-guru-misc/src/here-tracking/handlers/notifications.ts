import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteNotificationsV3RegistrationChannelIdRoute,
  deleteNotificationsV3RegistrationsRoute,
  getNotificationsV3HealthRoute,
  getNotificationsV3RegistrationChannelIdRoute,
  getNotificationsV3RegistrationsRoute,
  getNotificationsV3VersionRoute,
  postNotificationsV3RegistrationsRoute,
  putNotificationsV3RegistrationChannelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const notificationsHandler = app
  .openapi(getNotificationsV3HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsV3RegistrationChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsV3RegistrationChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putNotificationsV3RegistrationChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteNotificationsV3RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsV3RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNotificationsV3RegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNotificationsV3VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
