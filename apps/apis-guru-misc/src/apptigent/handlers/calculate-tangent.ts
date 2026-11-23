import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateTangentRoute } from '../routes'

export const postCalculateTangentRouteHandler: RouteHandler<
  typeof postCalculateTangentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
