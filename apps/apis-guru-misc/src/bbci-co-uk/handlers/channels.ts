import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getChannelsChannelBroadcastsRoute,
  getChannelsChannelHighlightsRoute,
  getChannelsChannelProgrammesRoute,
  getChannelsChannelScheduleDateRoute,
  getChannelsRoute,
} from '../routes'

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelBroadcastsRouteHandler: RouteHandler<
  typeof getChannelsChannelBroadcastsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelHighlightsRouteHandler: RouteHandler<
  typeof getChannelsChannelHighlightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelProgrammesRouteHandler: RouteHandler<
  typeof getChannelsChannelProgrammesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsChannelScheduleDateRouteHandler: RouteHandler<
  typeof getChannelsChannelScheduleDateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
