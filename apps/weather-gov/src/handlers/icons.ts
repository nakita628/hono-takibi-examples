import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIconsRoute,
  getIconsSetTimeOfDayFirstRoute,
  getIconsSetTimeOfDayFirstSecondRoute,
} from '../routes'

export const getIconsSetTimeOfDayFirstRouteHandler: RouteHandler<
  typeof getIconsSetTimeOfDayFirstRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIconsSetTimeOfDayFirstSecondRouteHandler: RouteHandler<
  typeof getIconsSetTimeOfDayFirstSecondRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIconsRouteHandler: RouteHandler<typeof getIconsRoute> = async (c) => {
  throw new Error('Not implemented')
}
