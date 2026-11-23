import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionMoveByoipCidrToIpamRoute,
  postActionMoveByoipCidrToIpamRoute,
} from '../routes'

export const getActionMoveByoipCidrToIpamRouteHandler: RouteHandler<
  typeof getActionMoveByoipCidrToIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionMoveByoipCidrToIpamRouteHandler: RouteHandler<
  typeof postActionMoveByoipCidrToIpamRoute
> = async (c) => {
  throw new Error('Not implemented')
}
