import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserIdRoute } from '../routes'

export const getUserIdRouteHandler: RouteHandler<typeof getUserIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
