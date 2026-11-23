import type { RouteHandler } from '@hono/zod-openapi'
import type { postDrvlcCertificateRoute } from '../routes'

export const postDrvlcCertificateRouteHandler: RouteHandler<
  typeof postDrvlcCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
