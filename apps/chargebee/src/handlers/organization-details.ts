import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOrganizationDetailsOrganizationDetailIdRoute,
  getOrganizationDetailsRoute,
  postOrganizationDetailsRoute,
} from '../routes'

export const getOrganizationDetailsRouteHandler: RouteHandler<
  typeof getOrganizationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationDetailsRouteHandler: RouteHandler<
  typeof postOrganizationDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationDetailsOrganizationDetailIdRouteHandler: RouteHandler<
  typeof getOrganizationDetailsOrganizationDetailIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
