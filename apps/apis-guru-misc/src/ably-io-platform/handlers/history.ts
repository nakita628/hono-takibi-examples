import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsChannelIdMessagesRoute,
  getChannelsChannelIdPresenceHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const historyHandler = app
  .openapi(getChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPresenceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
