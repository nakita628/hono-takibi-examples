import type { RouteHandler } from '@hono/zod-openapi'
import type { postDgmstCertificateRoute } from '../routes'

export const postDgmstCertificateRouteHandler: RouteHandler<
  typeof postDgmstCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
