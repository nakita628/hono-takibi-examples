import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsRoute } from '../routes'

export const postGroupsRouteHandler: RouteHandler<typeof postGroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}
