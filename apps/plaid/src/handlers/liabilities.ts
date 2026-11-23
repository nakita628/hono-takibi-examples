import type { RouteHandler } from '@hono/zod-openapi'
import type { postLiabilitiesGetRoute } from '../routes'

export const postLiabilitiesGetRouteHandler: RouteHandler<typeof postLiabilitiesGetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
