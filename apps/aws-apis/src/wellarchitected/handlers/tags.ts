import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTagsWorkloadArnTagKeysRoute,
  getTagsWorkloadArnRoute,
  postTagsWorkloadArnRoute,
} from '../routes'

export const getTagsWorkloadArnRouteHandler: RouteHandler<typeof getTagsWorkloadArnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postTagsWorkloadArnRouteHandler: RouteHandler<
  typeof postTagsWorkloadArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTagsWorkloadArnTagKeysRouteHandler: RouteHandler<
  typeof deleteTagsWorkloadArnTagKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
