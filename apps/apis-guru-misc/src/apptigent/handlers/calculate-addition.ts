import type { RouteHandler } from '@hono/zod-openapi'
import type { postCalculateAdditionRoute } from '../routes'

export const postCalculateAdditionRouteHandler: RouteHandler<
  typeof postCalculateAdditionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
