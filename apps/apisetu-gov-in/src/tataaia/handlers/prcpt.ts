import type { RouteHandler } from '@hono/zod-openapi'
import type { postPrcptCertificateRoute } from '../routes'

export const postPrcptCertificateRouteHandler: RouteHandler<
  typeof postPrcptCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
