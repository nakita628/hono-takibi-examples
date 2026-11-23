import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListServerCertificateTagsRoute,
  postActionListServerCertificateTagsRoute,
} from '../routes'

export const getActionListServerCertificateTagsRouteHandler: RouteHandler<
  typeof getActionListServerCertificateTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListServerCertificateTagsRouteHandler: RouteHandler<
  typeof postActionListServerCertificateTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
