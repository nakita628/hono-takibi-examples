import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionResumeProcessesRoute, postActionResumeProcessesRoute } from '../routes'

export const getActionResumeProcessesRouteHandler: RouteHandler<
  typeof getActionResumeProcessesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResumeProcessesRouteHandler: RouteHandler<
  typeof postActionResumeProcessesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
