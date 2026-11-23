import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMcpOauthCallbackRoute,
  getMcpOauthStartRoute,
  getMcpWWorkspaceListToolsRoute,
  postMcpOauthDiscoverRoute,
} from '../routes'

export const getMcpWWorkspaceListToolsRouteHandler: RouteHandler<
  typeof getMcpWWorkspaceListToolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMcpOauthDiscoverRouteHandler: RouteHandler<
  typeof postMcpOauthDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMcpOauthStartRouteHandler: RouteHandler<typeof getMcpOauthStartRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMcpOauthCallbackRouteHandler: RouteHandler<
  typeof getMcpOauthCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
