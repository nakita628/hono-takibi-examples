import type { RouteHandler } from '@hono/zod-openapi'
import type { getRelayRelayIdRoute, postRelayRoute } from '../routes'

export const postRelayRouteHandler: RouteHandler<typeof postRelayRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRelayRelayIdRouteHandler: RouteHandler<typeof getRelayRelayIdRoute> = async (
  c,
) => {}
