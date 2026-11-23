import type { RouteHandler } from '@hono/zod-openapi'
import type { getSanctionsSourceRoute } from '../routes'

export const getSanctionsSourceRouteHandler: RouteHandler<typeof getSanctionsSourceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
