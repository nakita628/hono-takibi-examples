import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChannelWhitelistRoute,
  postChannelBlacklistAddRoute,
  postChannelBlacklistRemoveAllRoute,
  postChannelBlacklistRemoveRoute,
  postChannelBlacklistSetRoute,
  postChannelDeleteRoute,
  postChannelInfoRoute,
  postChannelRoute,
  postChannelSubscriberAddRoute,
  postChannelSubscriberRemoveAllRoute,
  postChannelSubscriberRemoveRoute,
  postChannelWhitelistAddRoute,
  postChannelWhitelistRemoveAllRoute,
  postChannelWhitelistRemoveRoute,
  postChannelWhitelistSetRoute,
  postTmpchannelSubscriberSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const channelHandler = app
  .openapi(postChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelSubscriberAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelSubscriberRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelSubscriberRemoveAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTmpchannelSubscriberSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelBlacklistAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelBlacklistSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelBlacklistRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelBlacklistRemoveAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelWhitelistAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelWhitelistSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelWhitelistRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelWhitelistRemoveAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChannelWhitelistRoute, (c) => {
    throw new Error('Not implemented')
  })
