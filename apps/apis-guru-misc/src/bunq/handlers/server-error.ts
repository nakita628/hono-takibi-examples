import type { RouteHandler } from '@hono/zod-openapi'
import type { postServerErrorRoute } from '../routes'

export const postServerErrorRouteHandler: RouteHandler<typeof postServerErrorRoute> = async (c) => {
  throw new Error('Not implemented')
}
