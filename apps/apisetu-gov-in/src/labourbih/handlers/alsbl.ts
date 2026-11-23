import type { RouteHandler } from '@hono/zod-openapi'
import type { postAlsblCertificateRoute } from '../routes'

export const postAlsblCertificateRouteHandler: RouteHandler<
  typeof postAlsblCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
