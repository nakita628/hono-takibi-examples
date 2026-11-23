import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnalyzeLocationRoute } from '../routes'

export const postAnalyzeLocationRouteHandler: RouteHandler<
  typeof postAnalyzeLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
