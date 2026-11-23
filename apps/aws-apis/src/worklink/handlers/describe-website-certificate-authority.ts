import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeWebsiteCertificateAuthorityRoute } from '../routes'

export const postDescribeWebsiteCertificateAuthorityRouteHandler: RouteHandler<
  typeof postDescribeWebsiteCertificateAuthorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
