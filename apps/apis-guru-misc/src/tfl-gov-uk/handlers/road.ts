import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRoadAllDisruptionDisruptionIdsRoute,
  getRoadAllStreetDisruptionRoute,
  getRoadIdsDisruptionRoute,
  getRoadIdsRoute,
  getRoadIdsStatusRoute,
  getRoadMetaCategoriesRoute,
  getRoadMetaSeveritiesRoute,
  getRoadRoute,
} from '../routes'

export const getRoadRouteHandler: RouteHandler<typeof getRoadRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadMetaCategoriesRouteHandler: RouteHandler<
  typeof getRoadMetaCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadMetaSeveritiesRouteHandler: RouteHandler<
  typeof getRoadMetaSeveritiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadAllDisruptionDisruptionIdsRouteHandler: RouteHandler<
  typeof getRoadAllDisruptionDisruptionIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadAllStreetDisruptionRouteHandler: RouteHandler<
  typeof getRoadAllStreetDisruptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadIdsRouteHandler: RouteHandler<typeof getRoadIdsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadIdsDisruptionRouteHandler: RouteHandler<
  typeof getRoadIdsDisruptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRoadIdsStatusRouteHandler: RouteHandler<typeof getRoadIdsStatusRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
