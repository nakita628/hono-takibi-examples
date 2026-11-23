import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomainsDomainCheckRoute,
  getDomainsDomainRankRoute,
  getDomainsDomainWhoisRoute,
} from '../routes'

export const getDomainsDomainCheckRouteHandler: RouteHandler<
  typeof getDomainsDomainCheckRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsDomainRankRouteHandler: RouteHandler<
  typeof getDomainsDomainRankRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsDomainWhoisRouteHandler: RouteHandler<
  typeof getDomainsDomainWhoisRoute
> = async (c) => {
  throw new Error('Not implemented')
}
