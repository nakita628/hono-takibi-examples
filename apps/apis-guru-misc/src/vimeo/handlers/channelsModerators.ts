import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdModeratorsRoute,
  deleteChannelsChannelIdModeratorsUserIdRoute,
  getChannelsChannelIdModeratorsRoute,
  getChannelsChannelIdModeratorsUserIdRoute,
  patchChannelsChannelIdModeratorsRoute,
  putChannelsChannelIdModeratorsRoute,
  putChannelsChannelIdModeratorsUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsModeratorsHandler = app
  .openapi(deleteChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdModeratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChannelsChannelIdModeratorsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
