import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetTypeDefaultVersionRoute,
  postActionSetTypeDefaultVersionRoute,
} from '../routes'

export const getActionSetTypeDefaultVersionRouteHandler: RouteHandler<
  typeof getActionSetTypeDefaultVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetTypeDefaultVersionRouteHandler: RouteHandler<
  typeof postActionSetTypeDefaultVersionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
