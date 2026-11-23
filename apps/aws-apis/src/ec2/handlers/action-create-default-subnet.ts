import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateDefaultSubnetRoute,
  postActionCreateDefaultSubnetRoute,
} from '../routes'

export const getActionCreateDefaultSubnetRouteHandler: RouteHandler<
  typeof getActionCreateDefaultSubnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateDefaultSubnetRouteHandler: RouteHandler<
  typeof postActionCreateDefaultSubnetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
