import type { RouteHandler } from '@hono/zod-openapi'
import type { getSocialplatformsRoute } from '../routes'

export const getSocialplatformsRouteHandler: RouteHandler<typeof getSocialplatformsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
