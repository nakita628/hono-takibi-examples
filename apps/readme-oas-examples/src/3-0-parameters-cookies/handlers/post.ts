import type { RouteHandler } from '@hono/zod-openapi'
import type { postPostRoute } from '../routes'

export const postPostRouteHandler: RouteHandler<typeof postPostRoute> = async (c) => {
  throw new Error('Not implemented')
}
