import type { RouteHandler } from '@hono/zod-openapi'
import type { getTaskExportsIndexRoute } from '../routes'

export const getTaskExportsIndexRouteHandler: RouteHandler<
  typeof getTaskExportsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
