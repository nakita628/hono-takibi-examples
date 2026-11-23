import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV3UrlNotificationsMetadataRoute,
  postV3UrlNotificationsPublishRoute,
} from '../routes'

export const getV3UrlNotificationsMetadataRouteHandler: RouteHandler<
  typeof getV3UrlNotificationsMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV3UrlNotificationsPublishRouteHandler: RouteHandler<
  typeof postV3UrlNotificationsPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}
