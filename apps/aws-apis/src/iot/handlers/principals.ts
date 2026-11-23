import type { RouteHandler } from '@hono/zod-openapi'
import type { getPrincipalsThingsXAmznPrincipalRoute } from '../routes'

export const getPrincipalsThingsXAmznPrincipalRouteHandler: RouteHandler<
  typeof getPrincipalsThingsXAmznPrincipalRoute
> = async (c) => {
  throw new Error('Not implemented')
}
