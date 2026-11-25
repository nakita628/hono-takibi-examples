import type { RouteHandler } from '@hono/zod-openapi'
import type { postTokenRoute } from '../routes'

export const postTokenRouteHandler: RouteHandler<typeof postTokenRoute> = async (c) => {
  throw new Error('Not implemented')
}
