import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV2IncidentsIdRoute,
  getV2IncidentsRoute,
  getV2LocationsMarkersRoute,
  getV2LocationsRoute,
} from '../routes'

export const getV2IncidentsRouteHandler: RouteHandler<typeof getV2IncidentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2IncidentsIdRouteHandler: RouteHandler<typeof getV2IncidentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2LocationsRouteHandler: RouteHandler<typeof getV2LocationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2LocationsMarkersRouteHandler: RouteHandler<
  typeof getV2LocationsMarkersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
