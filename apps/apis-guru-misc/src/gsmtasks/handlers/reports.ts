import type { RouteHandler } from '@hono/zod-openapi'
import type { getReportsTasksStatesCountIndexRoute } from '../routes'

export const getReportsTasksStatesCountIndexRouteHandler: RouteHandler<
  typeof getReportsTasksStatesCountIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
