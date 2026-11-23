import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDhcpOptionsRoute,
  postActionDescribeDhcpOptionsRoute,
} from '../routes'

export const getActionDescribeDhcpOptionsRouteHandler: RouteHandler<
  typeof getActionDescribeDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDhcpOptionsRouteHandler: RouteHandler<
  typeof postActionDescribeDhcpOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
