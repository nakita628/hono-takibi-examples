import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteVariationSetIdRoute,
  getVariationSetAnalyzeIdRoute,
  getVariationSetArchiveYearMonthDayRoute,
  getVariationSetIdRoute,
  getVariationSetIndexRoute,
  postVariationSetIndexRoute,
  putVariationSetIdRoute,
} from '../routes'

export const getVariationSetIndexRouteHandler: RouteHandler<
  typeof getVariationSetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postVariationSetIndexRouteHandler: RouteHandler<
  typeof postVariationSetIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVariationSetAnalyzeIdRouteHandler: RouteHandler<
  typeof getVariationSetAnalyzeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVariationSetArchiveYearMonthDayRouteHandler: RouteHandler<
  typeof getVariationSetArchiveYearMonthDayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteVariationSetIdRouteHandler: RouteHandler<
  typeof deleteVariationSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVariationSetIdRouteHandler: RouteHandler<typeof getVariationSetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putVariationSetIdRouteHandler: RouteHandler<typeof putVariationSetIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
