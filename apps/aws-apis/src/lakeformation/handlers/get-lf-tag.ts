import type { RouteHandler } from '@hono/zod-openapi'
import type { postGetLFTagRoute } from '../routes'

export const postGetLFTagRouteHandler: RouteHandler<typeof postGetLFTagRoute> = async (c) => {
  throw new Error('Not implemented')
}
