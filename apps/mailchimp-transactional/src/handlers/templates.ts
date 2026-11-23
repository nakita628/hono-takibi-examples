import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postTemplatesAddRoute,
  postTemplatesDeleteRoute,
  postTemplatesInfoRoute,
  postTemplatesListRoute,
  postTemplatesPublishRoute,
  postTemplatesRenderRoute,
  postTemplatesTimeSeriesRoute,
  postTemplatesUpdateRoute,
} from '../routes'

export const postTemplatesAddRouteHandler: RouteHandler<typeof postTemplatesAddRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesInfoRouteHandler: RouteHandler<typeof postTemplatesInfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesUpdateRouteHandler: RouteHandler<
  typeof postTemplatesUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesPublishRouteHandler: RouteHandler<
  typeof postTemplatesPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesDeleteRouteHandler: RouteHandler<
  typeof postTemplatesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesListRouteHandler: RouteHandler<typeof postTemplatesListRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTemplatesTimeSeriesRouteHandler: RouteHandler<
  typeof postTemplatesTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTemplatesRenderRouteHandler: RouteHandler<
  typeof postTemplatesRenderRoute
> = async (c) => {
  throw new Error('Not implemented')
}
