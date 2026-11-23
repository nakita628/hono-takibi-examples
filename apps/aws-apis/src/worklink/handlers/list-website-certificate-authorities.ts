import type { RouteHandler } from '@hono/zod-openapi'
import type { postListWebsiteCertificateAuthoritiesRoute } from '../routes'

export const postListWebsiteCertificateAuthoritiesRouteHandler: RouteHandler<
  typeof postListWebsiteCertificateAuthoritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
