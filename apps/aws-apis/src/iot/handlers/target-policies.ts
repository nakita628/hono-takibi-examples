import type { RouteHandler } from '@hono/zod-openapi'
import type { postTargetPoliciesPolicyNameRoute, putTargetPoliciesPolicyNameRoute } from '../routes'

export const putTargetPoliciesPolicyNameRouteHandler: RouteHandler<
  typeof putTargetPoliciesPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTargetPoliciesPolicyNameRouteHandler: RouteHandler<
  typeof postTargetPoliciesPolicyNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
