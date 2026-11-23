import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUpdateSigningCertificateRoute,
  postActionUpdateSigningCertificateRoute,
} from '../routes'

export const getActionUpdateSigningCertificateRouteHandler: RouteHandler<
  typeof getActionUpdateSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUpdateSigningCertificateRouteHandler: RouteHandler<
  typeof postActionUpdateSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
