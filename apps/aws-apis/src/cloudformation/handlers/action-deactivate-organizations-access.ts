import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDeactivateOrganizationsAccessRoute,
  postActionDeactivateOrganizationsAccessRoute,
} from '../routes'

export const getActionDeactivateOrganizationsAccessRouteHandler: RouteHandler<
  typeof getActionDeactivateOrganizationsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDeactivateOrganizationsAccessRouteHandler: RouteHandler<
  typeof postActionDeactivateOrganizationsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
