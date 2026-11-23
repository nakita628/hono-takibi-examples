import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListServerCertificatesRoute,
  postActionListServerCertificatesRoute,
} from '../routes'

export const getActionListServerCertificatesRouteHandler: RouteHandler<
  typeof getActionListServerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListServerCertificatesRouteHandler: RouteHandler<
  typeof postActionListServerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
