import type { RouteHandler } from '@hono/zod-openapi'
import type { postAnalyzeRoute } from '../routes'

export const postAnalyzeRouteHandler: RouteHandler<typeof postAnalyzeRoute> = async (c) => {
  throw new Error('Not implemented')
}
