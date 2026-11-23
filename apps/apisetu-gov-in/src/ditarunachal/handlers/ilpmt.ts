import type { RouteHandler } from '@hono/zod-openapi'
import type { postIlpmtCertificateRoute } from '../routes'

export const postIlpmtCertificateRouteHandler: RouteHandler<
  typeof postIlpmtCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
