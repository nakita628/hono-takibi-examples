import type { RouteHandler } from '@hono/zod-openapi'
import type { postCheckRoute } from '../routes'

export const postCheckRouteHandler: RouteHandler<typeof postCheckRoute> = async (c) => {
  throw new Error('Not implemented')
}
