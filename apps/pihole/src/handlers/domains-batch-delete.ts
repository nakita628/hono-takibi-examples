import type { RouteHandler } from '@hono/zod-openapi'
import type { postDomainsBatchDeleteRoute } from '../routes'

export const postDomainsBatchDeleteRouteHandler: RouteHandler<
  typeof postDomainsBatchDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
