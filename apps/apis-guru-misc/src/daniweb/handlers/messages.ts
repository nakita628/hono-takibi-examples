import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getMessagesIDMetadataCollectionsRoute,
  getMessagesIDMetadataRoute,
  getMessagesIDRoute,
  postMessagesIDMetadataRoute,
  postMessagesMetadataFiltersRoute,
} from '../routes'

export const postMessagesMetadataFiltersRouteHandler: RouteHandler<
  typeof postMessagesMetadataFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesIDRouteHandler: RouteHandler<typeof getMessagesIDRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesIDMetadataRouteHandler: RouteHandler<
  typeof getMessagesIDMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMessagesIDMetadataRouteHandler: RouteHandler<
  typeof postMessagesIDMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMessagesIDMetadataCollectionsRouteHandler: RouteHandler<
  typeof getMessagesIDMetadataCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
