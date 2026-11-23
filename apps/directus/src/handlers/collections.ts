import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollectionsIdRoute,
  getCollectionsIdRoute,
  getCollectionsRoute,
  patchCollectionsIdRoute,
  postCollectionsRoute,
} from '../routes'

export const getCollectionsRouteHandler: RouteHandler<typeof getCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCollectionsRouteHandler: RouteHandler<typeof postCollectionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollectionsIdRouteHandler: RouteHandler<typeof getCollectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchCollectionsIdRouteHandler: RouteHandler<typeof patchCollectionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCollectionsIdRouteHandler: RouteHandler<
  typeof deleteCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
