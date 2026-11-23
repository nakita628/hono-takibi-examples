import type { RouteHandler } from '@hono/zod-openapi'
import type { getJurisdictionsJurisdictionIdRoute, getJurisdictionsRoute } from '../routes'

export const getJurisdictionsRouteHandler: RouteHandler<typeof getJurisdictionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getJurisdictionsJurisdictionIdRouteHandler: RouteHandler<
  typeof getJurisdictionsJurisdictionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
