import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMobilePushE2eeTestNotificationRoute,
  postMobilePushRegisterRoute,
  postMobilePushTestNotificationRoute,
  postRegisterClientDeviceRoute,
  postRemotesPushE2eeRegisterRoute,
  postRemoveClientDeviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileHandler = app
  .openapi(postMobilePushTestNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMobilePushE2eeTestNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMobilePushRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemotesPushE2eeRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRegisterClientDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRemoveClientDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
