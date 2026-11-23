import type { RouteHandler } from '@hono/zod-openapi'
import type { postSicrdCertificateRoute } from '../routes'

export const postSicrdCertificateRouteHandler: RouteHandler<
  typeof postSicrdCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
