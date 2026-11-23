import type { RouteHandler } from '@hono/zod-openapi'
import type { postNotQuiteCircularRoute } from '../routes'

export const postNotQuiteCircularRouteHandler: RouteHandler<
  typeof postNotQuiteCircularRoute
> = async (c) => {
  throw new Error('Not implemented')
}
