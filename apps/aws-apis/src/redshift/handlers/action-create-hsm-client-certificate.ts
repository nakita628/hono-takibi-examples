import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateHsmClientCertificateRoute,
  postActionCreateHsmClientCertificateRoute,
} from '../routes'

export const getActionCreateHsmClientCertificateRouteHandler: RouteHandler<
  typeof getActionCreateHsmClientCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateHsmClientCertificateRouteHandler: RouteHandler<
  typeof postActionCreateHsmClientCertificateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
