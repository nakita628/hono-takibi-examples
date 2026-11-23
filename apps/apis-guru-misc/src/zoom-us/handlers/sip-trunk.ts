import type { RouteHandler } from '@hono/zod-openapi'
import type { getSipTrunkNumbersRoute } from '../routes'

export const getSipTrunkNumbersRouteHandler: RouteHandler<typeof getSipTrunkNumbersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
