import type { RouteHandler } from '@hono/zod-openapi'
import type { getCertificatesOutGoingRoute } from '../routes'

export const getCertificatesOutGoingRouteHandler: RouteHandler<
  typeof getCertificatesOutGoingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
