import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListOpenIDConnectProvidersRoute,
  postActionListOpenIDConnectProvidersRoute,
} from '../routes'

export const getActionListOpenIDConnectProvidersRouteHandler: RouteHandler<
  typeof getActionListOpenIDConnectProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListOpenIDConnectProvidersRouteHandler: RouteHandler<
  typeof postActionListOpenIDConnectProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
