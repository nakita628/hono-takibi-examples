import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTagsResourceArnTagKeysRoute,
  getTagsResourceArnRoute,
  putTagsResourceArnRoute,
} from '../routes'

export const getTagsResourceArnRouteHandler: RouteHandler<typeof getTagsResourceArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putTagsResourceArnRouteHandler: RouteHandler<typeof putTagsResourceArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteTagsResourceArnTagKeysRouteHandler: RouteHandler<
  typeof deleteTagsResourceArnTagKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
