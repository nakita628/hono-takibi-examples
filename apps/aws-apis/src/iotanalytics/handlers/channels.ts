import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelNameRoute,
  getChannelsChannelNameRoute,
  getChannelsChannelNameSampleRoute,
  getChannelsRoute,
  postChannelsRoute,
  putChannelsChannelNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsHandler = app
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelNameSampleRoute, (c) => {
    throw new Error('Not implemented')
  })
