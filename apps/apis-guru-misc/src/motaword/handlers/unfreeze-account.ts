import type { RouteHandler } from '@hono/zod-openapi'
import type { postUnfreezeAccountRoute } from '../routes'

export const postUnfreezeAccountRouteHandler: RouteHandler<
  typeof postUnfreezeAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
