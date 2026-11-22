import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMessagesScheduledBroadcastsRoute,
  postCanvasTriggerScheduleCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingHandler = app
  .openapi(postCanvasTriggerScheduleCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesScheduledBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
