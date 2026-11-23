import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionResumeClusterRoute, postActionResumeClusterRoute } from '../routes'

export const getActionResumeClusterRouteHandler: RouteHandler<
  typeof getActionResumeClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResumeClusterRouteHandler: RouteHandler<
  typeof postActionResumeClusterRoute
> = async (c) => {
  throw new Error('Not implemented')
}
