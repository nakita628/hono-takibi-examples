import type { RouteHandler } from '@hono/zod-openapi'
import type { postAdcrdCertificateRoute } from '../routes'

export const postAdcrdCertificateRouteHandler: RouteHandler<
  typeof postAdcrdCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
