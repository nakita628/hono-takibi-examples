import type { RouteHandler } from '@hono/zod-openapi'
import type { postCfltrCertificateRoute } from '../routes'

export const postCfltrCertificateRouteHandler: RouteHandler<
  typeof postCfltrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
