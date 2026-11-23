import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionSetInstanceProtectionRoute,
  postActionSetInstanceProtectionRoute,
} from '../routes'

export const getActionSetInstanceProtectionRouteHandler: RouteHandler<
  typeof getActionSetInstanceProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionSetInstanceProtectionRouteHandler: RouteHandler<
  typeof postActionSetInstanceProtectionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
