import type { RouteHandler } from '@hono/zod-openapi'
import type { postInputRoute } from '../routes'

export const postInputRouteHandler: RouteHandler<typeof postInputRoute> = async (c) => {
  throw new Error('Not implemented')
}
