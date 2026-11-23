import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getResourcesArnTagsRoute,
  patchResourcesArnTagsRoute,
  postResourcesSearchRoute,
  putResourcesArnTagsRoute,
} from '../routes'

export const getResourcesArnTagsRouteHandler: RouteHandler<
  typeof getResourcesArnTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putResourcesArnTagsRouteHandler: RouteHandler<
  typeof putResourcesArnTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchResourcesArnTagsRouteHandler: RouteHandler<
  typeof patchResourcesArnTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postResourcesSearchRouteHandler: RouteHandler<
  typeof postResourcesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}
