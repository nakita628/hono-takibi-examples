import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2DomainsDomainNameRoute,
  getV2DomainsDomainNameRoute,
  getV2DomainsRoute,
  postV2DomainsRoute,
} from '../routes'

export const getV2DomainsRouteHandler: RouteHandler<typeof getV2DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2DomainsRouteHandler: RouteHandler<typeof postV2DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2DomainsDomainNameRouteHandler: RouteHandler<
  typeof getV2DomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2DomainsDomainNameRouteHandler: RouteHandler<
  typeof deleteV2DomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}
