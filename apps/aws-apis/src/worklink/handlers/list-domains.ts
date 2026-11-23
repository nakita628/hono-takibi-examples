import type { RouteHandler } from '@hono/zod-openapi'
import type { postListDomainsRoute } from '../routes'

export const postListDomainsRouteHandler: RouteHandler<typeof postListDomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}
