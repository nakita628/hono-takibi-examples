import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateOpenIDConnectProviderRoute,
  postActionCreateOpenIDConnectProviderRoute,
} from '../routes'

export const getActionCreateOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionCreateOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionCreateOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
