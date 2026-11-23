import type { RouteHandler } from '@hono/zod-openapi'
import type { postMarkStreamAsReadRoute } from '../routes'

export const postMarkStreamAsReadRouteHandler: RouteHandler<
  typeof postMarkStreamAsReadRoute
> = async (c) => {
  throw new Error('Not implemented')
}
