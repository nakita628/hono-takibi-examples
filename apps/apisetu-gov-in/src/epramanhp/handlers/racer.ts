import type { RouteHandler } from '@hono/zod-openapi'
import type { postRacerCertificateRoute } from '../routes'

export const postRacerCertificateRouteHandler: RouteHandler<
  typeof postRacerCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
