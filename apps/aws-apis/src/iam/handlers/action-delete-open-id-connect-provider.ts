import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeleteOpenIDConnectProviderRoute,
  postActionDeleteOpenIDConnectProviderRoute,
} from '../routes'

export const getActionDeleteOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof getActionDeleteOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeleteOpenIDConnectProviderRouteHandler: RouteHandler<
  typeof postActionDeleteOpenIDConnectProviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
