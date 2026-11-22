import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleIdRoute,
  getApiV2ChannelsTwitterMonitoredTwitterHandlesRoute,
  getApiV2ChannelsTwitterTicketsCommentIdStatusesRoute,
  postApiV2ChannelsTwitterTicketsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const xChannelHandler = app
  .openapi(getApiV2ChannelsTwitterMonitoredTwitterHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsTwitterMonitoredTwitterHandlesMonitoredTwitterHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ChannelsTwitterTicketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ChannelsTwitterTicketsCommentIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
