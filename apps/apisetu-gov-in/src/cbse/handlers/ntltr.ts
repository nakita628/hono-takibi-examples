import type { RouteHandler } from '@hono/zod-openapi'
import type { postNtltrCertificateRoute } from '../routes'

export const postNtltrCertificateRouteHandler: RouteHandler<
  typeof postNtltrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
