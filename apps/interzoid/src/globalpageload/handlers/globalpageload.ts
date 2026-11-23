import type { RouteHandler } from '@hono/zod-openapi'
import type { getGlobalpageloadRoute } from '../routes'

export const getGlobalpageloadRouteHandler: RouteHandler<typeof getGlobalpageloadRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
