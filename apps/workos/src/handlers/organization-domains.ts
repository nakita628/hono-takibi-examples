import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postOrganizationDomainsRoute,
  getOrganizationDomainsIdRoute,
  deleteOrganizationDomainsIdRoute,
  postOrganizationDomainsIdVerifyRoute,
} from '../routes'

export const postOrganizationDomainsRouteHandler: RouteHandler<
  typeof postOrganizationDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getOrganizationDomainsIdRouteHandler: RouteHandler<
  typeof getOrganizationDomainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteOrganizationDomainsIdRouteHandler: RouteHandler<
  typeof deleteOrganizationDomainsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postOrganizationDomainsIdVerifyRouteHandler: RouteHandler<
  typeof postOrganizationDomainsIdVerifyRoute
> = async (c) => {
  throw new Error('Not implemented')
}
