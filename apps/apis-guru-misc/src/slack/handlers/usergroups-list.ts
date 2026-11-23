import type { RouteHandler } from '@hono/zod-openapi'
import type { getUsergroupsListRoute } from '../routes'

export const getUsergroupsListRouteHandler: RouteHandler<typeof getUsergroupsListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
