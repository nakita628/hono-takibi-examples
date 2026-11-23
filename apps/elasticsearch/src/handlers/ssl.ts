import type { RouteHandler } from '@hono/zod-openapi'
import type { getSslCertificatesRoute } from '../routes'

export const getSslCertificatesRouteHandler: RouteHandler<typeof getSslCertificatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
