import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getServiceRadarrRadarrIdRoute,
  getServiceRadarrRoute,
  getServiceSonarrLookupTmdbIdRoute,
  getServiceSonarrRoute,
  getServiceSonarrSonarrIdRoute,
} from '../routes'

export const getServiceRadarrRouteHandler: RouteHandler<typeof getServiceRadarrRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServiceRadarrRadarrIdRouteHandler: RouteHandler<
  typeof getServiceRadarrRadarrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceSonarrRouteHandler: RouteHandler<typeof getServiceSonarrRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getServiceSonarrSonarrIdRouteHandler: RouteHandler<
  typeof getServiceSonarrSonarrIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getServiceSonarrLookupTmdbIdRouteHandler: RouteHandler<
  typeof getServiceSonarrLookupTmdbIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
