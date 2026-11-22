import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelsChannelIdPresenceRoute,
  getChannelsChannelIdRoute,
  getChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statusHandler = app
  .openapi(getChannelsChannelIdPresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
