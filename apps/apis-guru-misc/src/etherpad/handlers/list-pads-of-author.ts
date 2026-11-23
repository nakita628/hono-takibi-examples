import type { RouteHandler } from '@hono/zod-openapi'
import type { getListPadsOfAuthorRoute, postListPadsOfAuthorRoute } from '../routes'

export const getListPadsOfAuthorRouteHandler: RouteHandler<
  typeof getListPadsOfAuthorRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postListPadsOfAuthorRouteHandler: RouteHandler<
  typeof postListPadsOfAuthorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
