import type { RouteHandler } from '@hono/zod-openapi'
import type { postTechnicalCancelRoute } from '../routes'

export const postTechnicalCancelRouteHandler: RouteHandler<
  typeof postTechnicalCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
