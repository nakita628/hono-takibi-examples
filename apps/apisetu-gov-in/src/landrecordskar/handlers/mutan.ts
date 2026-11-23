import type { RouteHandler } from '@hono/zod-openapi'
import type { postMutanCertificateRoute } from '../routes'

export const postMutanCertificateRouteHandler: RouteHandler<
  typeof postMutanCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
