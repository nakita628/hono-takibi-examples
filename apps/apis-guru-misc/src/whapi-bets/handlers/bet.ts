import type { RouteHandler } from '@hono/zod-openapi'
import type { postBetComplexRoute, postBetSingleRoute } from '../routes'

export const postBetComplexRouteHandler: RouteHandler<typeof postBetComplexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBetSingleRouteHandler: RouteHandler<typeof postBetSingleRoute> = async (c) => {
  throw new Error('Not implemented')
}
