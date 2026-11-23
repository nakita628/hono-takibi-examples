import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRemoveClientIDFromOpenIDConnectProviderRoute,
  postActionRemoveClientIDFromOpenIDConnectProviderRoute,
} from '../routes'

export const getActionRemoveClientIDFromOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionRemoveClientIDFromOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRemoveClientIDFromOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionRemoveClientIDFromOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
