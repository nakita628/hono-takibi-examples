import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTimezoneAreaLocationRegionRoute,
  getTimezoneAreaLocationRegionTxtRoute,
  getTimezoneAreaLocationRoute,
  getTimezoneAreaLocationTxtRoute,
  getTimezoneAreaRoute,
  getTimezoneAreaTxtRoute,
  getTimezoneRoute,
} from '../routes'

export const getTimezoneRouteHandler: RouteHandler<typeof getTimezoneRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimezoneAreaRouteHandler: RouteHandler<typeof getTimezoneAreaRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimezoneAreaTxtRouteHandler: RouteHandler<typeof getTimezoneAreaTxtRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTimezoneAreaLocationRouteHandler: RouteHandler<
  typeof getTimezoneAreaLocationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimezoneAreaLocationTxtRouteHandler: RouteHandler<
  typeof getTimezoneAreaLocationTxtRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimezoneAreaLocationRegionRouteHandler: RouteHandler<
  typeof getTimezoneAreaLocationRegionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimezoneAreaLocationRegionTxtRouteHandler: RouteHandler<
  typeof getTimezoneAreaLocationRegionTxtRoute
> = async (c) => {
  throw new Error('Not implemented')
}
