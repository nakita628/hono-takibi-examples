import type { RouteHandler } from '@hono/zod-openapi'
import type { getListSessionsOfAuthorRoute, postListSessionsOfAuthorRoute } from '../routes'

export const getListSessionsOfAuthorRouteHandler: RouteHandler<
  typeof getListSessionsOfAuthorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postListSessionsOfAuthorRouteHandler: RouteHandler<
  typeof postListSessionsOfAuthorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
