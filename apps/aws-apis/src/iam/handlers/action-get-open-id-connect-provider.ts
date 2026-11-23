import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetOpenIDConnectProviderRoute,
  postActionGetOpenIDConnectProviderRoute,
} from '../routes'

export const getActionGetOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionGetOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionGetOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
