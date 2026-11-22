import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdTagsWordRoute,
  getChannelsChannelIdTagsRoute,
  getChannelsChannelIdTagsWordRoute,
  putChannelsChannelIdTagsRoute,
  putChannelsChannelIdTagsWordRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsTagsHandler = app
  .openapi(getChannelsChannelIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdTagsWordRoute, (c) => {
    throw new Error('Not implemented')
  })
