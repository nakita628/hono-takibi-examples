import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateMinMaxRoute } from '../routes'

export const postCalculateMinMaxRouteHandler: RouteHandler<
  typeof postCalculateMinMaxRoute
> = async (c) => {
  throw new Error('Not implemented')
}
