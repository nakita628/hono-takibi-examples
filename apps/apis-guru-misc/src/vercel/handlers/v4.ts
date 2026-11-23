import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV4AliasesIdOrAliasRoute,
  getV4AliasesRoute,
  getV4DomainsDomainRecordsRoute,
  getV4DomainsPriceRoute,
  getV4DomainsStatusRoute,
  postV4DomainsBuyRoute,
  postV4DomainsRoute,
} from '../routes'

export const getV4AliasesRouteHandler: RouteHandler<typeof getV4AliasesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV4AliasesIdOrAliasRouteHandler: RouteHandler<
  typeof getV4AliasesIdOrAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4DomainsRouteHandler: RouteHandler<typeof postV4DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV4DomainsBuyRouteHandler: RouteHandler<typeof postV4DomainsBuyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4DomainsPriceRouteHandler: RouteHandler<typeof getV4DomainsPriceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4DomainsStatusRouteHandler: RouteHandler<typeof getV4DomainsStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV4DomainsDomainRecordsRouteHandler: RouteHandler<
  typeof getV4DomainsDomainRecordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
