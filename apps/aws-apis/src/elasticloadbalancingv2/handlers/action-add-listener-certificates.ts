import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAddListenerCertificatesRoute,
  postActionAddListenerCertificatesRoute,
} from '../routes'

export const getActionAddListenerCertificatesRouteHandler: RouteHandler<
  typeof getActionAddListenerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddListenerCertificatesRouteHandler: RouteHandler<
  typeof postActionAddListenerCertificatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
