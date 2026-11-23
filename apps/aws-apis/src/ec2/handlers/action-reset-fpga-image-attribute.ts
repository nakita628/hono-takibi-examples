import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionResetFpgaImageAttributeRoute,
  postActionResetFpgaImageAttributeRoute,
} from '../routes'

export const getActionResetFpgaImageAttributeRouteHandler: RouteHandler<
  typeof getActionResetFpgaImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionResetFpgaImageAttributeRouteHandler: RouteHandler<
  typeof postActionResetFpgaImageAttributeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
