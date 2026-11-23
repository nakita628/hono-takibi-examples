import type { RouteHandler } from '@hono/zod-openapi'
import type { getVideoVariantsRoute } from '../routes'

export const getVideoVariantsRouteHandler: RouteHandler<typeof getVideoVariantsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
