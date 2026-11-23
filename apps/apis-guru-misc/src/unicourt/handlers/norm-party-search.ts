import type { RouteHandler } from '@hono/zod-openapi'
import type { getNormPartySearchNormPartySearchIdRoute, getNormPartySearchRoute } from '../routes'

export const getNormPartySearchRouteHandler: RouteHandler<typeof getNormPartySearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getNormPartySearchNormPartySearchIdRouteHandler: RouteHandler<
  typeof getNormPartySearchNormPartySearchIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
