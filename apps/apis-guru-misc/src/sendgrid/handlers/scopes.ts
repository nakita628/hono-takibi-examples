import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteScopesRequestsRequestIdRoute,
  getScopesRequestsRoute,
  getScopesRoute,
  patchScopesRequestsRequestIdApproveRoute,
} from '../routes'

export const getScopesRouteHandler: RouteHandler<typeof getScopesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getScopesRequestsRouteHandler: RouteHandler<typeof getScopesRequestsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteScopesRequestsRequestIdRouteHandler: RouteHandler<
  typeof deleteScopesRequestsRequestIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchScopesRequestsRequestIdApproveRouteHandler: RouteHandler<
  typeof patchScopesRequestsRequestIdApproveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
