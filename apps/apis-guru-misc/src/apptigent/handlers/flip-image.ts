import type { RouteHandler } from '@hono/zod-openapi'
import type { postFlipImageRoute } from '../routes'

export const postFlipImageRouteHandler: RouteHandler<typeof postFlipImageRoute> = async (c) => {
  throw new Error('Not implemented')
}
