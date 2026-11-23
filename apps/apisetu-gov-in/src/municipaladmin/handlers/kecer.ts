import type { RouteHandler } from '@hono/zod-openapi'
import type { postKecerCertificateRoute } from '../routes'

export const postKecerCertificateRouteHandler: RouteHandler<
  typeof postKecerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
