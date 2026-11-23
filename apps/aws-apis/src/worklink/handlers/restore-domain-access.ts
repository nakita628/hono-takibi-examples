import type { RouteHandler } from '@hono/zod-openapi'
import type { postRestoreDomainAccessRoute } from '../routes'

export const postRestoreDomainAccessRouteHandler: RouteHandler<
  typeof postRestoreDomainAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
