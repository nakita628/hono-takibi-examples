import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsListRoute } from '../routes'

export const postGroupsListRouteHandler: RouteHandler<typeof postGroupsListRoute> = async (c) => {
  throw new Error('Not implemented')
}
