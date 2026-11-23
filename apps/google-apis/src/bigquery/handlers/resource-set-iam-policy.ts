import type { RouteHandler } from '@hono/zod-openapi'
import type { postResourceSetIamPolicyRoute } from '../routes'

export const postResourceSetIamPolicyRouteHandler: RouteHandler<
  typeof postResourceSetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
