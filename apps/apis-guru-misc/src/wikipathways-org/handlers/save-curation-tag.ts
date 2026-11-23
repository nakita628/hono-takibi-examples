import type { RouteHandler } from '@hono/zod-openapi'
import type { getSaveCurationTagRoute } from '../routes'

export const getSaveCurationTagRouteHandler: RouteHandler<typeof getSaveCurationTagRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
