import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyPrivateDnsNameOptionsRoute,
  postActionModifyPrivateDnsNameOptionsRoute,
} from '../routes'

export const getActionModifyPrivateDnsNameOptionsRouteHandler: RouteHandler<
  typeof getActionModifyPrivateDnsNameOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyPrivateDnsNameOptionsRouteHandler: RouteHandler<
  typeof postActionModifyPrivateDnsNameOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
