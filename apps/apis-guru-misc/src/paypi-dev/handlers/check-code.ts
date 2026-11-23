import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckCodeRoute } from '../routes'

export const postCheckCodeRouteHandler: RouteHandler<typeof postCheckCodeRoute> = async (c) => {
  throw new Error('Not implemented')
}
