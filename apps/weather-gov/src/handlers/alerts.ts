import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAlertsActiveAreaAreaRoute,
  getAlertsActiveCountRoute,
  getAlertsActiveRegionRegionRoute,
  getAlertsActiveRoute,
  getAlertsActiveZoneZoneIdRoute,
  getAlertsIdRoute,
  getAlertsRoute,
  getAlertsTypesRoute,
} from '../routes'

export const getAlertsRouteHandler: RouteHandler<typeof getAlertsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsActiveRouteHandler: RouteHandler<typeof getAlertsActiveRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsActiveCountRouteHandler: RouteHandler<
  typeof getAlertsActiveCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsActiveZoneZoneIdRouteHandler: RouteHandler<
  typeof getAlertsActiveZoneZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsActiveAreaAreaRouteHandler: RouteHandler<
  typeof getAlertsActiveAreaAreaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsActiveRegionRegionRouteHandler: RouteHandler<
  typeof getAlertsActiveRegionRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsTypesRouteHandler: RouteHandler<typeof getAlertsTypesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAlertsIdRouteHandler: RouteHandler<typeof getAlertsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
