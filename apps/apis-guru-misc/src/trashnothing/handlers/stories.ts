import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStoriesRoute,
  getStoriesStoryIdRoute,
  postStoriesRoute,
  postStoriesStoryIdViewedRoute,
  putStoriesStoryIdLikeRoute,
  putStoriesStoryIdUnlikeRoute,
} from '../routes'

export const getStoriesRouteHandler: RouteHandler<typeof getStoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postStoriesRouteHandler: RouteHandler<typeof postStoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getStoriesStoryIdRouteHandler: RouteHandler<typeof getStoriesStoryIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putStoriesStoryIdLikeRouteHandler: RouteHandler<
  typeof putStoriesStoryIdLikeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putStoriesStoryIdUnlikeRouteHandler: RouteHandler<
  typeof putStoriesStoryIdUnlikeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStoriesStoryIdViewedRouteHandler: RouteHandler<
  typeof postStoriesStoryIdViewedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
