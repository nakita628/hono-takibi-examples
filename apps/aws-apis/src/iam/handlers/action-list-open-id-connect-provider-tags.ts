import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListOpenIDConnectProviderTagsRoute,
  postActionListOpenIDConnectProviderTagsRoute,
} from '../routes'

export const getActionListOpenIDConnectProviderTagsRouteHandler: RouteHandler<
  typeof getActionListOpenIDConnectProviderTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListOpenIDConnectProviderTagsRouteHandler: RouteHandler<
  typeof postActionListOpenIDConnectProviderTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
