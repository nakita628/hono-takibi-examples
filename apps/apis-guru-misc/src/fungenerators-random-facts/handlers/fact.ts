import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFactRoute,
  getFactCategoriesRoute,
  getFactFodCategoriesRoute,
  getFactFodRoute,
  getFactNumbersRoute,
  getFactOnthisdayBornRoute,
  getFactOnthisdayDiedRoute,
  getFactOnthisdayEventRoute,
  getFactRandomRoute,
  getFactRoute,
  getFactSearchRoute,
  putFactRoute,
} from '../routes'

export const deleteFactRouteHandler: RouteHandler<typeof deleteFactRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactRouteHandler: RouteHandler<typeof getFactRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putFactRouteHandler: RouteHandler<typeof putFactRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactCategoriesRouteHandler: RouteHandler<typeof getFactCategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFactFodRouteHandler: RouteHandler<typeof getFactFodRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactFodCategoriesRouteHandler: RouteHandler<
  typeof getFactFodCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactNumbersRouteHandler: RouteHandler<typeof getFactNumbersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactOnthisdayBornRouteHandler: RouteHandler<
  typeof getFactOnthisdayBornRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactOnthisdayDiedRouteHandler: RouteHandler<
  typeof getFactOnthisdayDiedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactOnthisdayEventRouteHandler: RouteHandler<
  typeof getFactOnthisdayEventRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactRandomRouteHandler: RouteHandler<typeof getFactRandomRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFactSearchRouteHandler: RouteHandler<typeof getFactSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}
