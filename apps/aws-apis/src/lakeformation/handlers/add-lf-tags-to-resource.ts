import type { RouteHandler } from '@hono/zod-openapi'
import type { postAddLFTagsToResourceRoute } from '../routes'

export const postAddLFTagsToResourceRouteHandler: RouteHandler<
  typeof postAddLFTagsToResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
