import type { RouteHandler } from '@hono/zod-openapi'
import type { postAlimwCertificateRoute } from '../routes'

export const postAlimwCertificateRouteHandler: RouteHandler<
  typeof postAlimwCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
