import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDomainsSearchRoute,
  getDomainsTldZoneIdDownloadRoute,
  getDomainsTldZoneIdRoute,
  getDomainsTldZoneIdSearchRoute,
  getDomainsUpdatesAddedDownloadRoute,
  getDomainsUpdatesAddedRoute,
  getDomainsUpdatesDeletedDownloadRoute,
  getDomainsUpdatesDeletedRoute,
  getDomainsUpdatesListRoute,
} from '../routes'

export const getDomainsSearchRouteHandler: RouteHandler<typeof getDomainsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDomainsTldZoneIdRouteHandler: RouteHandler<
  typeof getDomainsTldZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsTldZoneIdDownloadRouteHandler: RouteHandler<
  typeof getDomainsTldZoneIdDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsTldZoneIdSearchRouteHandler: RouteHandler<
  typeof getDomainsTldZoneIdSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsUpdatesAddedRouteHandler: RouteHandler<
  typeof getDomainsUpdatesAddedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsUpdatesAddedDownloadRouteHandler: RouteHandler<
  typeof getDomainsUpdatesAddedDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsUpdatesDeletedRouteHandler: RouteHandler<
  typeof getDomainsUpdatesDeletedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsUpdatesDeletedDownloadRouteHandler: RouteHandler<
  typeof getDomainsUpdatesDeletedDownloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDomainsUpdatesListRouteHandler: RouteHandler<
  typeof getDomainsUpdatesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}
