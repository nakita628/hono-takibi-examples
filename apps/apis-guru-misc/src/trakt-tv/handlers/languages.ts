import type { RouteHandler } from '@hono/zod-openapi'
import type { getLanguagesTypeRoute } from '../routes'

export const getLanguagesTypeRouteHandler: RouteHandler<typeof getLanguagesTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
