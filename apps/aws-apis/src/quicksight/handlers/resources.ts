import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteResourcesResourceArnTagsKeysRoute,
  getResourcesResourceArnTagsRoute,
  postResourcesResourceArnTagsRoute,
} from '../routes'

export const getResourcesResourceArnTagsRouteHandler: RouteHandler<
  typeof getResourcesResourceArnTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResourcesResourceArnTagsRouteHandler: RouteHandler<
  typeof postResourcesResourceArnTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteResourcesResourceArnTagsKeysRouteHandler: RouteHandler<
  typeof deleteResourcesResourceArnTagsKeysRoute
> = async (c) => {
  throw new Error('Not implemented')
}
