import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ChannelGroupsChannelGroupKeyRoute,
  getV1ChannelGroupsChannelGroupKeyRoute,
  getV1ChannelGroupsRoute,
  putV1ChannelGroupsChannelGroupKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelGroupsHandler = app
  .openapi(getV1ChannelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ChannelGroupsChannelGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ChannelGroupsChannelGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ChannelGroupsChannelGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
