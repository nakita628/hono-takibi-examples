import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionListTopicsRoute, postActionListTopicsRoute } from '../routes'

export const getActionListTopicsRouteHandler: RouteHandler<
  typeof getActionListTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListTopicsRouteHandler: RouteHandler<
  typeof postActionListTopicsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
