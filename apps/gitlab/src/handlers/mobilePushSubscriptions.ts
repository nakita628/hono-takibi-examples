import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4UserPushSubscriptionsRoute,
  postApiV4UserPushSubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobilePushSubscriptionsHandler = app
  .openapi(postApiV4UserPushSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UserPushSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
