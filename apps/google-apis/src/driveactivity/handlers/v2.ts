import type { RouteHandler } from '@hono/zod-openapi'
import type { postV2ActivityQueryRoute } from '../routes'

export const postV2ActivityQueryRouteHandler: RouteHandler<
  typeof postV2ActivityQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}
