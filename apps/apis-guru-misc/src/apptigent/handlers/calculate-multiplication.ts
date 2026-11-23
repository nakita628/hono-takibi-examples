import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateMultiplicationRoute } from '../routes'

export const postCalculateMultiplicationRouteHandler: RouteHandler<
  typeof postCalculateMultiplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
