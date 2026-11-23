import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyScheduledActionRoute,
  postActionModifyScheduledActionRoute,
} from '../routes'

export const getActionModifyScheduledActionRouteHandler: RouteHandler<
  typeof getActionModifyScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyScheduledActionRouteHandler: RouteHandler<
  typeof postActionModifyScheduledActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
