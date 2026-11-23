import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMobilePushE2eeTestNotificationRoute,
  postMobilePushRegisterRoute,
  postMobilePushTestNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobilePushHandler = app
  .openapi(postMobilePushTestNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMobilePushE2eeTestNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMobilePushRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
