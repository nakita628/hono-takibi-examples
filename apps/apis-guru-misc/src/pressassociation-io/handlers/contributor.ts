import type { RouteHandler } from '@hono/zod-openapi'
import type { getContributorContributorIdRoute, getContributorRoute } from '../routes'

export const getContributorRouteHandler: RouteHandler<typeof getContributorRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getContributorContributorIdRouteHandler: RouteHandler<
  typeof getContributorContributorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
