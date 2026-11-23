import type { RouteHandler } from '@hono/zod-openapi'
import type { postVhtaxCertificateRoute } from '../routes'

export const postVhtaxCertificateRouteHandler: RouteHandler<
  typeof postVhtaxCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
