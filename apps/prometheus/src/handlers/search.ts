import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchLabelNamesRoute,
  getSearchLabelValuesRoute,
  getSearchMetricNamesRoute,
  postSearchLabelNamesRoute,
  postSearchLabelValuesRoute,
  postSearchMetricNamesRoute,
} from '../routes'

export const getSearchMetricNamesRouteHandler: RouteHandler<
  typeof getSearchMetricNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchMetricNamesRouteHandler: RouteHandler<
  typeof postSearchMetricNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchLabelNamesRouteHandler: RouteHandler<
  typeof getSearchLabelNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchLabelNamesRouteHandler: RouteHandler<
  typeof postSearchLabelNamesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchLabelValuesRouteHandler: RouteHandler<
  typeof getSearchLabelValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postSearchLabelValuesRouteHandler: RouteHandler<
  typeof postSearchLabelValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
