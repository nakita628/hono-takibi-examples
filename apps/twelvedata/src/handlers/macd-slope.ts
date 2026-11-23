import type { RouteHandler } from '@hono/zod-openapi'
import type { getMacdSlopeRoute } from '../routes'

export const getMacdSlopeRouteHandler: RouteHandler<typeof getMacdSlopeRoute> = async (c) => {
  throw new Error('Not implemented')
}
