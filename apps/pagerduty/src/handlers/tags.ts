import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTagsRoute,
  postTagsRoute,
  getTagsIdRoute,
  deleteTagsIdRoute,
  getTagsIdEntityTypeRoute,
} from '../routes'

export const getTagsRouteHandler: RouteHandler<typeof getTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTagsRouteHandler: RouteHandler<typeof postTagsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsIdRouteHandler: RouteHandler<typeof getTagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsIdRouteHandler: RouteHandler<typeof deleteTagsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTagsIdEntityTypeRouteHandler: RouteHandler<
  typeof getTagsIdEntityTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
