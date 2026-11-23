import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateSubtractionRoute } from '../routes'

export const postCalculateSubtractionRouteHandler: RouteHandler<
  typeof postCalculateSubtractionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
