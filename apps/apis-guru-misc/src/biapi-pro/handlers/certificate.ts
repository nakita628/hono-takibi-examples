import type { RouteHandler } from '@hono/zod-openapi'
import type { getCertificateTypeRoute } from '../routes'

export const getCertificateTypeRouteHandler: RouteHandler<typeof getCertificateTypeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
