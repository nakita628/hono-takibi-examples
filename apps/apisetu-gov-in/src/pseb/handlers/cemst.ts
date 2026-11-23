import type { RouteHandler } from '@hono/zod-openapi'
import type { postCemstCertificateRoute } from '../routes'

export const postCemstCertificateRouteHandler: RouteHandler<
  typeof postCemstCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
