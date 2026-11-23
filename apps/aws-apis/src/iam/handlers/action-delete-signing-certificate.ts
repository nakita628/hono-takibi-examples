import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteSigningCertificateRoute,
  postActionDeleteSigningCertificateRoute,
} from '../routes'

export const getActionDeleteSigningCertificateRouteHandler: RouteHandler<
  typeof getActionDeleteSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteSigningCertificateRouteHandler: RouteHandler<
  typeof postActionDeleteSigningCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
