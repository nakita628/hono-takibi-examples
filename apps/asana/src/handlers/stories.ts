import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStoriesStoryGidRoute,
  putStoriesStoryGidRoute,
  deleteStoriesStoryGidRoute,
} from '../routes'

export const getStoriesStoryGidRouteHandler: RouteHandler<typeof getStoriesStoryGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putStoriesStoryGidRouteHandler: RouteHandler<typeof putStoriesStoryGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteStoriesStoryGidRouteHandler: RouteHandler<
  typeof deleteStoriesStoryGidRoute
> = async (c) => {
  throw new Error('Not implemented')
}
