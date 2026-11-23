import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute,
  getDomainsSourceLanguageRoute,
} from '../routes'

export const getDomainsSourceDomainsLanguageTargetDomainsLanguageRouteHandler: RouteHandler<
  typeof getDomainsSourceDomainsLanguageTargetDomainsLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsSourceLanguageRouteHandler: RouteHandler<
  typeof getDomainsSourceLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
