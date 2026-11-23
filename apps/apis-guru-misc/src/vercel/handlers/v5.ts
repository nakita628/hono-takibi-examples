import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV5DomainsDomainRoute,
  getV5DomainsRoute,
  getV5UserTokensRoute,
  getV5UserTokensTokenIdRoute,
} from '../routes'

export const getV5DomainsRouteHandler: RouteHandler<typeof getV5DomainsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV5DomainsDomainRouteHandler: RouteHandler<typeof getV5DomainsDomainRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV5UserTokensRouteHandler: RouteHandler<typeof getV5UserTokensRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV5UserTokensTokenIdRouteHandler: RouteHandler<
  typeof getV5UserTokensTokenIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
