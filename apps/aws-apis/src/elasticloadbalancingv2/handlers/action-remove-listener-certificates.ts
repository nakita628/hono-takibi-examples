import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveListenerCertificatesRoute,
  postActionRemoveListenerCertificatesRoute,
} from '../routes'

export const getActionRemoveListenerCertificatesRouteHandler: RouteHandler<
  typeof getActionRemoveListenerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveListenerCertificatesRouteHandler: RouteHandler<
  typeof postActionRemoveListenerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
