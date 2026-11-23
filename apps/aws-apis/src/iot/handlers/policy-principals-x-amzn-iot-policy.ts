import type { RouteHandler } from '@hono/zod-openapi'
import type { getPolicyPrincipalsXAmznIotPolicyRoute } from '../routes'

export const getPolicyPrincipalsXAmznIotPolicyRouteHandler: RouteHandler<
  typeof getPolicyPrincipalsXAmznIotPolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
