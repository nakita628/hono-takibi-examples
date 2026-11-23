import type { RouteHandler } from '@hono/zod-openapi'
import type { postUncrdCertificateRoute } from '../routes'

export const postUncrdCertificateRouteHandler: RouteHandler<
  typeof postUncrdCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
