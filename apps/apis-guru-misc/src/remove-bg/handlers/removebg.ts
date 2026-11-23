import type { RouteHandler } from '@hono/zod-openapi'
import type { postRemovebgRoute } from '../routes'

export const postRemovebgRouteHandler: RouteHandler<typeof postRemovebgRoute> = async (c) => {
  throw new Error('Not implemented')
}
