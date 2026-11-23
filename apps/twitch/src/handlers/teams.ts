import type { RouteHandler } from '@hono/zod-openapi'
import type { getTeamsChannelRoute, getTeamsRoute } from '../routes'

export const getTeamsChannelRouteHandler: RouteHandler<typeof getTeamsChannelRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsRouteHandler: RouteHandler<typeof getTeamsRoute> = async (c) => {
  throw new Error('Not implemented')
}
