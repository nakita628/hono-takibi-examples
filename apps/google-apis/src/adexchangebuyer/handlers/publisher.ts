import type { RouteHandler } from '@hono/zod-openapi'
import type { getPublisherAccountIdProfilesRoute } from '../routes'

export const getPublisherAccountIdProfilesRouteHandler: RouteHandler<
  typeof getPublisherAccountIdProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
