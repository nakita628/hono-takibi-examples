import type { RouteHandler } from '@hono/zod-openapi'
import type { postDeleteVcenterClientRoute } from '../routes'

export const postDeleteVcenterClientRouteHandler: RouteHandler<
  typeof postDeleteVcenterClientRoute
> = async (c) => {
  throw new Error('Not implemented')
}
