import type { RouteHandler } from '@hono/zod-openapi'
import type { getPersonPersonIdCombinedCreditsRoute, getPersonPersonIdRoute } from '../routes'

export const getPersonPersonIdRouteHandler: RouteHandler<typeof getPersonPersonIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPersonPersonIdCombinedCreditsRouteHandler: RouteHandler<
  typeof getPersonPersonIdCombinedCreditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
