import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyDBProxyTargetGroupRoute,
  postActionModifyDBProxyTargetGroupRoute,
} from '../routes'

export const getActionModifyDBProxyTargetGroupRouteHandler: RouteHandler<
  typeof getActionModifyDBProxyTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyDBProxyTargetGroupRouteHandler: RouteHandler<
  typeof postActionModifyDBProxyTargetGroupRoute
> = async (c) => {
  throw new Error('Not implemented')
}
