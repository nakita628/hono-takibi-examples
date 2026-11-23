import type { RouteHandler } from '@hono/zod-openapi'
import type { postAgcerCertificateRoute } from '../routes'

export const postAgcerCertificateRouteHandler: RouteHandler<
  typeof postAgcerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
