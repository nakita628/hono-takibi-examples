import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdVideosRoute,
  deleteChannelsChannelIdVideosVideoIdRoute,
  getChannelsChannelIdVideosRoute,
  getChannelsChannelIdVideosVideoIdRoute,
  getVideosVideoIdAvailableChannelsRoute,
  putChannelsChannelIdVideosRoute,
  putChannelsChannelIdVideosVideoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsVideosHandler = app
  .openapi(deleteChannelsChannelIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdAvailableChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
