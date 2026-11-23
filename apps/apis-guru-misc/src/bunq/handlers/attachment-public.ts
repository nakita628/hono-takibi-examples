import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAttachmentPublicAttachmentPublicUUIDContentRoute,
  getAttachmentPublicItemIdRoute,
  postAttachmentPublicRoute,
} from '../routes'

export const postAttachmentPublicRouteHandler: RouteHandler<
  typeof postAttachmentPublicRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttachmentPublicAttachmentPublicUUIDContentRouteHandler: RouteHandler<
  typeof getAttachmentPublicAttachmentPublicUUIDContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAttachmentPublicItemIdRouteHandler: RouteHandler<
  typeof getAttachmentPublicItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
