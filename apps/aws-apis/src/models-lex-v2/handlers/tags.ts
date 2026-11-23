import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTagsResourceARNTagKeysRoute,
  getTagsResourceARNRoute,
  postTagsResourceARNRoute,
} from '../routes'

export const getTagsResourceARNRouteHandler: RouteHandler<typeof getTagsResourceARNRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTagsResourceARNRouteHandler: RouteHandler<
  typeof postTagsResourceARNRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsResourceARNTagKeysRouteHandler: RouteHandler<
  typeof deleteTagsResourceARNTagKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
