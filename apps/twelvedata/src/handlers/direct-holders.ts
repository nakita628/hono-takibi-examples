import type { RouteHandler } from '@hono/zod-openapi'
import type { getDirectHoldersRoute } from '../routes'

export const getDirectHoldersRouteHandler: RouteHandler<typeof getDirectHoldersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
