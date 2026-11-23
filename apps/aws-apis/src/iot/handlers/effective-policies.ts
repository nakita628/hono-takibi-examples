import type { RouteHandler } from '@hono/zod-openapi'
import type { postEffectivePoliciesRoute } from '../routes'

export const postEffectivePoliciesRouteHandler: RouteHandler<
  typeof postEffectivePoliciesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
