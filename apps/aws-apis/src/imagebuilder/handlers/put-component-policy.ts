import type { RouteHandler } from '@hono/zod-openapi'
import type { putPutComponentPolicyRoute } from '../routes'

export const putPutComponentPolicyRouteHandler: RouteHandler<
  typeof putPutComponentPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
