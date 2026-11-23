import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionUntagOpenIDConnectProviderRoute,
  postActionUntagOpenIDConnectProviderRoute,
} from '../routes'

export const getActionUntagOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionUntagOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionUntagOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionUntagOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
