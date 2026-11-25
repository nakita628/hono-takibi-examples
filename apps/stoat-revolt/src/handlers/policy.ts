import type { RouteHandler } from '@hono/zod-openapi'
import type { postPolicyAcknowledgeRoute } from '../routes'

export const postPolicyAcknowledgeRouteHandler: RouteHandler<
  typeof postPolicyAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
