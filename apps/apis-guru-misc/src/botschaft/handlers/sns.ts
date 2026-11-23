import type { RouteHandler } from '@hono/zod-openapi'
import type { getSnsRoute, postSnsRoute } from '../routes'

export const getSnsRouteHandler: RouteHandler<typeof getSnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postSnsRouteHandler: RouteHandler<typeof postSnsRoute> = async (c) => {
  throw new Error('Not implemented')
}
