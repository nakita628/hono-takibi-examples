import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAddClientIDToOpenIDConnectProviderRoute,
  postActionAddClientIDToOpenIDConnectProviderRoute,
} from '../routes'

export const getActionAddClientIDToOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionAddClientIDToOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAddClientIDToOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionAddClientIDToOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
