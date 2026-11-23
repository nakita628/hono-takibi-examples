import type { RouteHandler } from '@hono/zod-openapi'
import type { postPathRoute } from '../routes'

export const postPathRouteHandler: RouteHandler<typeof postPathRoute> = async (c) => {
  throw new Error('Not implemented')
}
