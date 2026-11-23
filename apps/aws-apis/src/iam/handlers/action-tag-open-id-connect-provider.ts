import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionTagOpenIDConnectProviderRoute,
  postActionTagOpenIDConnectProviderRoute,
} from '../routes'

export const getActionTagOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionTagOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionTagOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionTagOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
