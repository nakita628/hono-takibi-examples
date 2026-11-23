import type { RouteHandler } from '@hono/zod-openapi'
import type { getDefaultTemplatesRoute } from '../routes'

export const getDefaultTemplatesRouteHandler: RouteHandler<
  typeof getDefaultTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
