import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionRegisterDBProxyTargetsRoute,
  postActionRegisterDBProxyTargetsRoute,
} from '../routes'

export const getActionRegisterDBProxyTargetsRouteHandler: RouteHandler<
  typeof getActionRegisterDBProxyTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionRegisterDBProxyTargetsRouteHandler: RouteHandler<
  typeof postActionRegisterDBProxyTargetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
