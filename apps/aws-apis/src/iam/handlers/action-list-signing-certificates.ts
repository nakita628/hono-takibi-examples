import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListSigningCertificatesRoute,
  postActionListSigningCertificatesRoute,
} from '../routes'

export const getActionListSigningCertificatesRouteHandler: RouteHandler<
  typeof getActionListSigningCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListSigningCertificatesRouteHandler: RouteHandler<
  typeof postActionListSigningCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
