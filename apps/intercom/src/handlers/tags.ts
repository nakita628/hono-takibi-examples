import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTagsRoute,
  postTagsRoute,
  getTagsTagIdRoute,
  deleteTagsTagIdRoute,
} from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsRouteHandler: RouteHandler<typeof postTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsTagIdRouteHandler: RouteHandler<typeof getTagsTagIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsTagIdRouteHandler: RouteHandler<typeof deleteTagsTagIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
