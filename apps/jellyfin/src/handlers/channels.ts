import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChannelsChannelIdFeaturesRoute,
  getChannelsChannelIdItemsRoute,
  getChannelsFeaturesRoute,
  getChannelsItemsLatestRoute,
  getChannelsRoute,
} from '../routes'

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelIdFeaturesRouteHandler: RouteHandler<
  typeof getChannelsChannelIdFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelIdItemsRouteHandler: RouteHandler<
  typeof getChannelsChannelIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsFeaturesRouteHandler: RouteHandler<
  typeof getChannelsFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsItemsLatestRouteHandler: RouteHandler<
  typeof getChannelsItemsLatestRoute
> = async (c) => {
  throw new Error('Not implemented')
}
