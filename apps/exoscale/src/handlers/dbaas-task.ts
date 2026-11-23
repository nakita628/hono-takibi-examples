import type { RouteHandler } from '@hono/zod-openapi'
import type { getDbaasTaskServiceIdRoute } from '../routes'

export const getDbaasTaskServiceIdRouteHandler: RouteHandler<
  typeof getDbaasTaskServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
