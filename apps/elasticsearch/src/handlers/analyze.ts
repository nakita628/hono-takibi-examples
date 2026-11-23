import type { RouteHandler } from '@hono/zod-openapi'
import type { getAnalyzeRoute, postAnalyzeRoute } from '../routes'

export const getAnalyzeRouteHandler: RouteHandler<typeof getAnalyzeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnalyzeRouteHandler: RouteHandler<typeof postAnalyzeRoute> = async (c) => {
  throw new Error('Not implemented')
}
