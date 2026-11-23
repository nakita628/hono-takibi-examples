import type { RouteHandler } from '@hono/zod-openapi'
import type { postSearchFuzzyRoute, postSearchRoute } from '../routes'

export const postSearchRouteHandler: RouteHandler<typeof postSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchFuzzyRouteHandler: RouteHandler<typeof postSearchFuzzyRoute> = async (c) => {
  throw new Error('Not implemented')
}
