import type { RouteHandler } from '@hono/zod-openapi'
import type { postEdgeIssueTokenRoute, postEdgeValidateRoute } from '../routes'

export const postEdgeValidateRouteHandler: RouteHandler<typeof postEdgeValidateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postEdgeIssueTokenRouteHandler: RouteHandler<typeof postEdgeIssueTokenRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
