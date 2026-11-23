import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationsServiceAccessRoute,
  postOrganizationsServiceAccessRoute,
} from '../routes'

export const getOrganizationsServiceAccessRouteHandler: RouteHandler<
  typeof getOrganizationsServiceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsServiceAccessRouteHandler: RouteHandler<
  typeof postOrganizationsServiceAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}
