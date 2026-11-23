import type { RouteHandler } from '@hono/zod-openapi'
import type { getGetTextRoute, postGetTextRoute } from '../routes'

export const getGetTextRouteHandler: RouteHandler<typeof getGetTextRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGetTextRouteHandler: RouteHandler<typeof postGetTextRoute> = async (c) => {
  throw new Error('Not implemented')
}
