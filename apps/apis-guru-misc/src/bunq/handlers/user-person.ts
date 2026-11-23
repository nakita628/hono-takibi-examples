import type { RouteHandler } from '@hono/zod-openapi'
import type { getUserPersonItemIdRoute, putUserPersonItemIdRoute } from '../routes'

export const getUserPersonItemIdRouteHandler: RouteHandler<
  typeof getUserPersonItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putUserPersonItemIdRouteHandler: RouteHandler<
  typeof putUserPersonItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
