import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChannelLastMessageRoute,
  getChannelMaxMessageSeqRoute,
  getChannelWhitelistRoute,
  postChannelBlacklistAddRoute,
  postChannelBlacklistRemoveAllRoute,
  postChannelBlacklistRemoveRoute,
  postChannelBlacklistSetRoute,
  postChannelDeleteRoute,
  postChannelInfoRoute,
  postChannelMessagesyncRoute,
  postChannelRoute,
  postChannelSubscriberAddRoute,
  postChannelSubscriberRemoveAllRoute,
  postChannelSubscriberRemoveRoute,
  postChannelWhitelistAddRoute,
  postChannelWhitelistRemoveAllRoute,
  postChannelWhitelistRemoveRoute,
  postChannelWhitelistSetRoute,
} from '../routes'

export const postChannelRouteHandler: RouteHandler<typeof postChannelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelInfoRouteHandler: RouteHandler<typeof postChannelInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelDeleteRouteHandler: RouteHandler<typeof postChannelDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postChannelSubscriberAddRouteHandler: RouteHandler<
  typeof postChannelSubscriberAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelSubscriberRemoveRouteHandler: RouteHandler<
  typeof postChannelSubscriberRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelSubscriberRemoveAllRouteHandler: RouteHandler<
  typeof postChannelSubscriberRemoveAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelMessagesyncRouteHandler: RouteHandler<
  typeof postChannelMessagesyncRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelMaxMessageSeqRouteHandler: RouteHandler<
  typeof getChannelMaxMessageSeqRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelLastMessageRouteHandler: RouteHandler<
  typeof getChannelLastMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelBlacklistAddRouteHandler: RouteHandler<
  typeof postChannelBlacklistAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelBlacklistSetRouteHandler: RouteHandler<
  typeof postChannelBlacklistSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelBlacklistRemoveRouteHandler: RouteHandler<
  typeof postChannelBlacklistRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelBlacklistRemoveAllRouteHandler: RouteHandler<
  typeof postChannelBlacklistRemoveAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelWhitelistAddRouteHandler: RouteHandler<
  typeof postChannelWhitelistAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelWhitelistSetRouteHandler: RouteHandler<
  typeof postChannelWhitelistSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelWhitelistRemoveRouteHandler: RouteHandler<
  typeof postChannelWhitelistRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelWhitelistRemoveAllRouteHandler: RouteHandler<
  typeof postChannelWhitelistRemoveAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelWhitelistRouteHandler: RouteHandler<
  typeof getChannelWhitelistRoute
> = async (c) => {
  throw new Error('Not implemented')
}
