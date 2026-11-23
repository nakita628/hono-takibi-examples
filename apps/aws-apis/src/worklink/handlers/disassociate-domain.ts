import type { RouteHandler } from '@hono/zod-openapi'
import type { postDisassociateDomainRoute } from '../routes'

export const postDisassociateDomainRouteHandler: RouteHandler<
  typeof postDisassociateDomainRoute
> = async (c) => {
  throw new Error('Not implemented')
}
