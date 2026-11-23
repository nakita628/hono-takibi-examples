import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChannelsChannelNameRoute,
  getChannelsChannelNameRoute,
  getChannelsChannelNameSampleRoute,
  getChannelsRoute,
  postChannelsRoute,
  putChannelsChannelNameRoute,
} from '../routes'

export const postChannelsRouteHandler: RouteHandler<typeof postChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChannelsChannelNameRouteHandler: RouteHandler<
  typeof deleteChannelsChannelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelNameRouteHandler: RouteHandler<
  typeof getChannelsChannelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChannelsChannelNameRouteHandler: RouteHandler<
  typeof putChannelsChannelNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelNameSampleRouteHandler: RouteHandler<
  typeof getChannelsChannelNameSampleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
