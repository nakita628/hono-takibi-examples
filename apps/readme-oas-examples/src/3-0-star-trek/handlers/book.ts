import type { RouteHandler } from '@hono/zod-openapi'
import type { getBookRoute, getBookSearchRoute, postBookSearchRoute } from '../routes'

export const getBookRouteHandler: RouteHandler<typeof getBookRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getBookSearchRouteHandler: RouteHandler<typeof getBookSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postBookSearchRouteHandler: RouteHandler<typeof postBookSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
