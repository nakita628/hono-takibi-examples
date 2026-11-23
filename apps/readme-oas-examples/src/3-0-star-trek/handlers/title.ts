import type { RouteHandler } from '@hono/zod-openapi'
import type { getTitleRoute, getTitleSearchRoute, postTitleSearchRoute } from '../routes'

export const getTitleRouteHandler: RouteHandler<typeof getTitleRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTitleSearchRouteHandler: RouteHandler<typeof getTitleSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTitleSearchRouteHandler: RouteHandler<typeof postTitleSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
