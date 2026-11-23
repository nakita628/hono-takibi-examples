import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChannelsChannelIdMessagesRoute,
  getChannelsChannelIdPresenceHistoryRoute,
  getChannelsChannelIdPresenceRoute,
  getChannelsChannelIdRoute,
  getChannelsRoute,
  postChannelsChannelIdMessagesRoute,
} from '../routes'

export const getChannelsChannelIdMessagesRouteHandler: RouteHandler<
  typeof getChannelsChannelIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelsChannelIdMessagesRouteHandler: RouteHandler<
  typeof postChannelsChannelIdMessagesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelIdPresenceRouteHandler: RouteHandler<
  typeof getChannelsChannelIdPresenceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelIdPresenceHistoryRouteHandler: RouteHandler<
  typeof getChannelsChannelIdPresenceHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelIdRouteHandler: RouteHandler<
  typeof getChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}
