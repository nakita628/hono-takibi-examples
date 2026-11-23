import type { RouteHandler } from '@hono/zod-openapi'
import type { postCopyMessageRoute } from '../routes'

export const postCopyMessageRouteHandler: RouteHandler<typeof postCopyMessageRoute> = async (c) => {
  throw new Error('Not implemented')
}
