import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionModifyCertificatesRoute, postActionModifyCertificatesRoute } from '../routes'

export const getActionModifyCertificatesRouteHandler: RouteHandler<
  typeof getActionModifyCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyCertificatesRouteHandler: RouteHandler<
  typeof postActionModifyCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
