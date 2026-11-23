import type { RouteHandler } from '@hono/zod-openapi'
import type { getProjectProjectIdRoute } from '../routes'

export const getProjectProjectIdRouteHandler: RouteHandler<
  typeof getProjectProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
