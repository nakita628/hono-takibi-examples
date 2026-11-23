import type { RouteHandler } from '@hono/zod-openapi'
import type { postLogOutRoute } from '../routes'

export const postLogOutRouteHandler: RouteHandler<typeof postLogOutRoute> = async (c) => {
  throw new Error('Not implemented')
}
