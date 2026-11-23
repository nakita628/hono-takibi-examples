import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionActivateOrganizationsAccessRoute,
  postActionActivateOrganizationsAccessRoute,
} from '../routes'

export const getActionActivateOrganizationsAccessRouteHandler: RouteHandler<
  typeof getActionActivateOrganizationsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionActivateOrganizationsAccessRouteHandler: RouteHandler<
  typeof postActionActivateOrganizationsAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
