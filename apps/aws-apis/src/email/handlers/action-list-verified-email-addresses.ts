import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionListVerifiedEmailAddressesRoute,
  postActionListVerifiedEmailAddressesRoute,
} from '../routes'

export const getActionListVerifiedEmailAddressesRouteHandler: RouteHandler<
  typeof getActionListVerifiedEmailAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionListVerifiedEmailAddressesRouteHandler: RouteHandler<
  typeof postActionListVerifiedEmailAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
