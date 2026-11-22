import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiTvChannelFeedRoute,
  getApiTvChannelRoute,
  getApiTvChannelsRoute,
  getApiTvFeedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tvHandler = app
  .openapi(getApiTvChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvChannelFeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTvChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
