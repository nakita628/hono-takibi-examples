import type { RouteHandler } from '@hono/zod-openapi'
import type { postRevokeDomainAccessRoute } from '../routes'

export const postRevokeDomainAccessRouteHandler: RouteHandler<
  typeof postRevokeDomainAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
