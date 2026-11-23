import type { RouteHandler } from '@hono/zod-openapi'
import type { postGroupsCreateRoute } from '../routes'

export const postGroupsCreateRouteHandler: RouteHandler<typeof postGroupsCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
