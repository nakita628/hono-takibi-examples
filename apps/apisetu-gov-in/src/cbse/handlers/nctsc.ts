import type { RouteHandler } from '@hono/zod-openapi'
import type { postNctscCertificateRoute } from '../routes'

export const postNctscCertificateRouteHandler: RouteHandler<
  typeof postNctscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
