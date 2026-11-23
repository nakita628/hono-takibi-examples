import type { RouteHandler } from '@hono/zod-openapi'
import type { postFinalizeCutoverRoute } from '../routes'

export const postFinalizeCutoverRouteHandler: RouteHandler<
  typeof postFinalizeCutoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}
