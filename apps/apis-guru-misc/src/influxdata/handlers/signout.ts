import type { RouteHandler } from '@hono/zod-openapi'
import type { postSignoutRoute } from '../routes'

export const postSignoutRouteHandler: RouteHandler<typeof postSignoutRoute> = async (c) => {
  throw new Error('Not implemented')
}
