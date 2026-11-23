import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateDhcpOptionsRoute,
  postActionAssociateDhcpOptionsRoute,
} from '../routes'

export const getActionAssociateDhcpOptionsRouteHandler: RouteHandler<
  typeof getActionAssociateDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateDhcpOptionsRouteHandler: RouteHandler<
  typeof postActionAssociateDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
