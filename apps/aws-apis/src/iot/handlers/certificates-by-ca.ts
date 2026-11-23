import type { RouteHandler } from '@hono/zod-openapi'
import type { getCertificatesByCaCaCertificateIdRoute } from '../routes'

export const getCertificatesByCaCaCertificateIdRouteHandler: RouteHandler<
  typeof getCertificatesByCaCaCertificateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
