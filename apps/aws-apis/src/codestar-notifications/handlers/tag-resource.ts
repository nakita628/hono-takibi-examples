import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagResourceRoute } from '../routes'

export const postTagResourceRouteHandler: RouteHandler<typeof postTagResourceRoute> = async (c) => {
  throw new Error('Not implemented')
}
