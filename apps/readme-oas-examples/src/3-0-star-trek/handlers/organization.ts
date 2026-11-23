import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationRoute,
  getOrganizationSearchRoute,
  postOrganizationSearchRoute,
} from '../routes'

export const getOrganizationRouteHandler: RouteHandler<typeof getOrganizationRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationSearchRouteHandler: RouteHandler<
  typeof getOrganizationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationSearchRouteHandler: RouteHandler<
  typeof postOrganizationSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
