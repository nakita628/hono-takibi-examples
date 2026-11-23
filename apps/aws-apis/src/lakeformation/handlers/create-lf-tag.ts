import type { RouteHandler } from '@hono/zod-openapi'
import type { postCreateLFTagRoute } from '../routes'

export const postCreateLFTagRouteHandler: RouteHandler<typeof postCreateLFTagRoute> = async (c) => {
  throw new Error('Not implemented')
}
