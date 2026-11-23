import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionSuspendProcessesRoute, postActionSuspendProcessesRoute } from '../routes'

export const getActionSuspendProcessesRouteHandler: RouteHandler<
  typeof getActionSuspendProcessesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSuspendProcessesRouteHandler: RouteHandler<
  typeof postActionSuspendProcessesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
