import type { RouteHandler } from '@hono/zod-openapi'
import type { postCfmstCertificateRoute } from '../routes'

export const postCfmstCertificateRouteHandler: RouteHandler<
  typeof postCfmstCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
