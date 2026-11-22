import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelsChannelIdRoute,
  getChannelsChannelIdRoute,
  getChannelsRoute,
  getMeChannelsRoute,
  getUsersUserIdChannelsRoute,
  patchChannelsChannelIdRoute,
  postChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelsEssentialsHandler = app
  .openapi(getChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
