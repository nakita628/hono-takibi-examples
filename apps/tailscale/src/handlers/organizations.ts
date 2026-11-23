import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationsOrganizationTailnetsRoute,
  postOrganizationsOrganizationTailnetsRoute,
} from '../routes'

export const getOrganizationsOrganizationTailnetsRouteHandler: RouteHandler<
  typeof getOrganizationsOrganizationTailnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationsOrganizationTailnetsRouteHandler: RouteHandler<
  typeof postOrganizationsOrganizationTailnetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
