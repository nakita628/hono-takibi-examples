import type { RouteHandler } from '@hono/zod-openapi'
import type { postTagRoute } from '../routes'

export const postTagRouteHandler: RouteHandler<typeof postTagRoute> = async (c) => {
  throw new Error('Not implemented')
}
