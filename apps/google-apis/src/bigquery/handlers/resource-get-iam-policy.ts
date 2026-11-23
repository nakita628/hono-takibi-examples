import type { RouteHandler } from '@hono/zod-openapi'
import type { postResourceGetIamPolicyRoute } from '../routes'

export const postResourceGetIamPolicyRouteHandler: RouteHandler<
  typeof postResourceGetIamPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
