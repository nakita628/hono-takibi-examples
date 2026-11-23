import type { RouteHandler } from '@hono/zod-openapi'
import type { postFreezeAccountRoute } from '../routes'

export const postFreezeAccountRouteHandler: RouteHandler<typeof postFreezeAccountRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
