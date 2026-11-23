import type { RouteHandler } from '@hono/zod-openapi'
import type { getCertificationsTypeRoute } from '../routes'

export const getCertificationsTypeRouteHandler: RouteHandler<
  typeof getCertificationsTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
