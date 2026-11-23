import type { RouteHandler } from '@hono/zod-openapi'
import type { postEpfscCertificateRoute } from '../routes'

export const postEpfscCertificateRouteHandler: RouteHandler<
  typeof postEpfscCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
