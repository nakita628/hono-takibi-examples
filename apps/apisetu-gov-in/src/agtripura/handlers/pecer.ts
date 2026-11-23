import type { RouteHandler } from '@hono/zod-openapi'
import type { postPecerCertificateRoute } from '../routes'

export const postPecerCertificateRouteHandler: RouteHandler<
  typeof postPecerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
