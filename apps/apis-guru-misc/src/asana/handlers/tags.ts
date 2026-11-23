import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTagsTagGidRoute,
  getTagsRoute,
  getTagsTagGidRoute,
  getTagsTagGidTasksRoute,
  postTagsRoute,
  putTagsTagGidRoute,
} from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsRouteHandler: RouteHandler<typeof postTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsTagGidRouteHandler: RouteHandler<typeof deleteTagsTagGidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTagsTagGidRouteHandler: RouteHandler<typeof getTagsTagGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTagsTagGidRouteHandler: RouteHandler<typeof putTagsTagGidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsTagGidTasksRouteHandler: RouteHandler<typeof getTagsTagGidTasksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
