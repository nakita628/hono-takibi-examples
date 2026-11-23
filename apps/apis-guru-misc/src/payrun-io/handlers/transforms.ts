import type { RouteHandler } from '@hono/zod-openapi'
import type { getTransformsRoute, postTransformsRoute } from '../routes'

export const getTransformsRouteHandler: RouteHandler<typeof getTransformsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTransformsRouteHandler: RouteHandler<typeof postTransformsRoute> = async (c) => {
  throw new Error('Not implemented')
}
