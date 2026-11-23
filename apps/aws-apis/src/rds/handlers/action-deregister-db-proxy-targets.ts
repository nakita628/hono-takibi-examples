import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeregisterDBProxyTargetsRoute,
  postActionDeregisterDBProxyTargetsRoute,
} from '../routes'

export const getActionDeregisterDBProxyTargetsRouteHandler: RouteHandler<
  typeof getActionDeregisterDBProxyTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeregisterDBProxyTargetsRouteHandler: RouteHandler<
  typeof postActionDeregisterDBProxyTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
