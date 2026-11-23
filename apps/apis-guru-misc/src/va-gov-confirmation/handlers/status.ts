import type { RouteHandler } from '@hono/zod-openapi'
import type { postStatusRoute } from '../routes'

export const postStatusRouteHandler: RouteHandler<typeof postStatusRoute> = async (c) => {
  throw new Error('Not implemented')
}
