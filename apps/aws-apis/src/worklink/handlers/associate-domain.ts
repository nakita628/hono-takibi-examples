import type { RouteHandler } from '@hono/zod-openapi'
import type { postAssociateDomainRoute } from '../routes'

export const postAssociateDomainRouteHandler: RouteHandler<
  typeof postAssociateDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
