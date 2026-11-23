import type { RouteHandler } from '@hono/zod-openapi'
import type { postHpcerCertificateRoute } from '../routes'

export const postHpcerCertificateRouteHandler: RouteHandler<
  typeof postHpcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
