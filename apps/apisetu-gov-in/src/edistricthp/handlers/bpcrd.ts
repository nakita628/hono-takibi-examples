import type { RouteHandler } from '@hono/zod-openapi'
import type { postBpcrdCertificateRoute } from '../routes'

export const postBpcrdCertificateRouteHandler: RouteHandler<
  typeof postBpcrdCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
