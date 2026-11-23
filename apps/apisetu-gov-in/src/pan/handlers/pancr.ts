import type { RouteHandler } from '@hono/zod-openapi'
import type { postPancrCertificateRoute } from '../routes'

export const postPancrCertificateRouteHandler: RouteHandler<
  typeof postPancrCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
