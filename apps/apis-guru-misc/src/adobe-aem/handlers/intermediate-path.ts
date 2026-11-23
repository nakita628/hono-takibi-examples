import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIntermediatePathAuthorizableIdKeystoreStoreP12Route,
  getIntermediatePathAuthorizableIdKsJsonRoute,
  postIntermediatePathAuthorizableIdKsHtmlRoute,
} from '../routes'

export const postIntermediatePathAuthorizableIdKsHtmlRouteHandler: RouteHandler<
  typeof postIntermediatePathAuthorizableIdKsHtmlRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntermediatePathAuthorizableIdKsJsonRouteHandler: RouteHandler<
  typeof getIntermediatePathAuthorizableIdKsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntermediatePathAuthorizableIdKeystoreStoreP12RouteHandler: RouteHandler<
  typeof getIntermediatePathAuthorizableIdKeystoreStoreP12Route
> = async (c) => {
  throw new Error('Not implemented')
}
