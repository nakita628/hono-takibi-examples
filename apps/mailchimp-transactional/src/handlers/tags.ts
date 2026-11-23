import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postTagsAllTimeSeriesRoute,
  postTagsDeleteRoute,
  postTagsInfoRoute,
  postTagsListRoute,
  postTagsTimeSeriesRoute,
} from '../routes'

export const postTagsListRouteHandler: RouteHandler<typeof postTagsListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsDeleteRouteHandler: RouteHandler<typeof postTagsDeleteRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsInfoRouteHandler: RouteHandler<typeof postTagsInfoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsTimeSeriesRouteHandler: RouteHandler<typeof postTagsTimeSeriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTagsAllTimeSeriesRouteHandler: RouteHandler<
  typeof postTagsAllTimeSeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
