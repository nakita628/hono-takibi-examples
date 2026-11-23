import type { RouteHandler } from '@hono/zod-openapi'
import type { getContributeJsonRoute } from '../routes'

export const getContributeJsonRouteHandler: RouteHandler<typeof getContributeJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
