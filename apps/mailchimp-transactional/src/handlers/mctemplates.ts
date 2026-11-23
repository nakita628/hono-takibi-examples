import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMctemplatesInfoRoute,
  postMctemplatesListRoute,
  postMctemplatesRenderRoute,
  postMctemplatesTimeSeriesRoute,
} from '../routes'

export const postMctemplatesInfoRouteHandler: RouteHandler<
  typeof postMctemplatesInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMctemplatesListRouteHandler: RouteHandler<
  typeof postMctemplatesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMctemplatesRenderRouteHandler: RouteHandler<
  typeof postMctemplatesRenderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMctemplatesTimeSeriesRouteHandler: RouteHandler<
  typeof postMctemplatesTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
