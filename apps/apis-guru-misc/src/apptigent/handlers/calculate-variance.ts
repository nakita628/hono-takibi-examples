import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateVarianceRoute } from '../routes'

export const postCalculateVarianceRouteHandler: RouteHandler<
  typeof postCalculateVarianceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
