import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTeamsCurrentCustomDomainsDomainIdRoute,
  getTeamsCurrentCustomDomainsRoute,
  postTeamsCurrentCustomDomainsRoute,
} from '../routes'

export const postTeamsCurrentCustomDomainsRouteHandler: RouteHandler<
  typeof postTeamsCurrentCustomDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTeamsCurrentCustomDomainsRouteHandler: RouteHandler<
  typeof getTeamsCurrentCustomDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTeamsCurrentCustomDomainsDomainIdRouteHandler: RouteHandler<
  typeof deleteTeamsCurrentCustomDomainsDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
