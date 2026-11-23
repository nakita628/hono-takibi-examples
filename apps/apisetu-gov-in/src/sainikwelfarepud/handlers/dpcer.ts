import type { RouteHandler } from '@hono/zod-openapi'
import type { postDpcerCertificateRoute } from '../routes'

export const postDpcerCertificateRouteHandler: RouteHandler<
  typeof postDpcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
