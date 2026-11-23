import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateDivisionRoute } from '../routes'

export const postCalculateDivisionRouteHandler: RouteHandler<
  typeof postCalculateDivisionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
