import type { RouteHandler } from '@hono/zod-openapi'
import type { postBknocCertificateRoute } from '../routes'

export const postBknocCertificateRouteHandler: RouteHandler<
  typeof postBknocCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
