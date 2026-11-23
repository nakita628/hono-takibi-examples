import type { RouteHandler } from '@hono/zod-openapi'
import type { postHlipcCertificateRoute } from '../routes'

export const postHlipcCertificateRouteHandler: RouteHandler<
  typeof postHlipcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
