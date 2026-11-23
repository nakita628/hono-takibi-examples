import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsChannelIdMessagesRoute,
  getChannelsChannelIdPresenceHistoryRoute,
  getChannelsChannelIdPresenceRoute,
  getChannelsChannelIdRoute,
  getChannelsRoute,
  postChannelsChannelIdMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(getChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdPresenceHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
