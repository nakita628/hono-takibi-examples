import type { RouteHandler } from '@hono/zod-openapi'
import type { postGovidCertificateRoute } from '../routes'

export const postGovidCertificateRouteHandler: RouteHandler<
  typeof postGovidCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
