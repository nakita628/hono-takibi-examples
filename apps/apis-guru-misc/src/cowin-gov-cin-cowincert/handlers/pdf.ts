import type { RouteHandler } from '@hono/zod-openapi'
import type { postPdfCertificateRoute } from '../routes'

export const postPdfCertificateRouteHandler: RouteHandler<typeof postPdfCertificateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
