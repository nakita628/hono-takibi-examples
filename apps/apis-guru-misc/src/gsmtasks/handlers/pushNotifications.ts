import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePushNotificationsIdIndexRoute,
  getPushNotificationsIdIndexRoute,
  getPushNotificationsIndexRoute,
  patchPushNotificationsIdIndexRoute,
  postPushNotificationsIdResendIndexRoute,
  postPushNotificationsIndexRoute,
  putPushNotificationsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pushNotificationsHandler = app
  .openapi(getPushNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPushNotificationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePushNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPushNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPushNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPushNotificationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPushNotificationsIdResendIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
