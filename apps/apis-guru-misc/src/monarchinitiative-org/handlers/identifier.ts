import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIdentifierMapperSourceTargetIndexRoute,
  getIdentifierPrefixesContractUriRoute,
  getIdentifierPrefixesExpandIdRoute,
  getIdentifierPrefixesIndexRoute,
} from '../routes'

export const getIdentifierMapperSourceTargetIndexRouteHandler: RouteHandler<
  typeof getIdentifierMapperSourceTargetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentifierPrefixesIndexRouteHandler: RouteHandler<
  typeof getIdentifierPrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentifierPrefixesContractUriRouteHandler: RouteHandler<
  typeof getIdentifierPrefixesContractUriRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIdentifierPrefixesExpandIdRouteHandler: RouteHandler<
  typeof getIdentifierPrefixesExpandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
