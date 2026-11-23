import type { RouteHandler } from '@hono/zod-openapi'
import type { getPartyPartyIdAssociatedAttorneysRoute, getPartyPartyIdRoute } from '../routes'

export const getPartyPartyIdRouteHandler: RouteHandler<typeof getPartyPartyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPartyPartyIdAssociatedAttorneysRouteHandler: RouteHandler<
  typeof getPartyPartyIdAssociatedAttorneysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
