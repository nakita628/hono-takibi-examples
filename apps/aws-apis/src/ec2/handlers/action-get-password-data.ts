import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionGetPasswordDataRoute, postActionGetPasswordDataRoute } from '../routes'

export const getActionGetPasswordDataRouteHandler: RouteHandler<
  typeof getActionGetPasswordDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetPasswordDataRouteHandler: RouteHandler<
  typeof postActionGetPasswordDataRoute
> = async (c) => {
  throw new Error('Not implemented')
}
