import type { RouteHandler } from '@hono/zod-openapi'
import type { postPalcsCertificateRoute } from '../routes'

export const postPalcsCertificateRouteHandler: RouteHandler<
  typeof postPalcsCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
