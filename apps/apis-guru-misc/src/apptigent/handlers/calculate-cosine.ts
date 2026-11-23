import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateCosineRoute } from '../routes'

export const postCalculateCosineRouteHandler: RouteHandler<
  typeof postCalculateCosineRoute
> = async (c) => {
  throw new Error('Not implemented')
}
