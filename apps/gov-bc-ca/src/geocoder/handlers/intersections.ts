import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getIntersectionsIntersectionIDOutputFormatRoute,
  getIntersectionsNearestOutputFormatRoute,
  getIntersectionsNearOutputFormatRoute,
  getIntersectionsWithinOutputFormatRoute,
} from '../routes'

export const getIntersectionsNearOutputFormatRouteHandler: RouteHandler<
  typeof getIntersectionsNearOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntersectionsNearestOutputFormatRouteHandler: RouteHandler<
  typeof getIntersectionsNearestOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntersectionsWithinOutputFormatRouteHandler: RouteHandler<
  typeof getIntersectionsWithinOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIntersectionsIntersectionIDOutputFormatRouteHandler: RouteHandler<
  typeof getIntersectionsIntersectionIDOutputFormatRoute
> = async (c) => {
  throw new Error('Not implemented')
}
