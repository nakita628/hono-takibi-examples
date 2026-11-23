import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiBusinessItemIdRoute,
  getApiGovernmentOrganisationRoute,
  getApiSeriesMembershipRoute,
  getApiTreatyIdBusinessItemsRoute,
  getApiTreatyIdRoute,
  getApiTreatyRoute,
} from '../routes'

export const getApiBusinessItemIdRouteHandler: RouteHandler<
  typeof getApiBusinessItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiGovernmentOrganisationRouteHandler: RouteHandler<
  typeof getApiGovernmentOrganisationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiSeriesMembershipRouteHandler: RouteHandler<
  typeof getApiSeriesMembershipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTreatyRouteHandler: RouteHandler<typeof getApiTreatyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTreatyIdRouteHandler: RouteHandler<typeof getApiTreatyIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiTreatyIdBusinessItemsRouteHandler: RouteHandler<
  typeof getApiTreatyIdBusinessItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
