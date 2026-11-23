import type { RouteHandler } from '@hono/zod-openapi'
import type { postV1AmpUrlsBatchGetRoute } from '../routes'

export const postV1AmpUrlsBatchGetRouteHandler: RouteHandler<
  typeof postV1AmpUrlsBatchGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
