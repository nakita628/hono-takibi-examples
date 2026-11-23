import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnalyzedResourceRoute } from '../routes'

export const postAnalyzedResourceRouteHandler: RouteHandler<
  typeof postAnalyzedResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
