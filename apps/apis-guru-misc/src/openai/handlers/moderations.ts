import type { RouteHandler } from '@hono/zod-openapi'
import type { postModerationsRoute } from '../routes'

export const postModerationsRouteHandler: RouteHandler<typeof postModerationsRoute> = async (c) => {
  throw new Error('Not implemented')
}
