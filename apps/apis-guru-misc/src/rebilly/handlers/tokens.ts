import type { RouteHandler } from '@hono/zod-openapi'
import type { getTokensRoute, getTokensTokenRoute, postTokensRoute } from '../routes'

export const getTokensRouteHandler: RouteHandler<typeof getTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTokensRouteHandler: RouteHandler<typeof postTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTokensTokenRouteHandler: RouteHandler<typeof getTokensTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
