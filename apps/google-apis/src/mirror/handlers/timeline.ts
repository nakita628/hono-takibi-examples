import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTimelineIdRoute,
  deleteTimelineItemIdAttachmentsAttachmentIdRoute,
  getTimelineIdRoute,
  getTimelineItemIdAttachmentsAttachmentIdRoute,
  getTimelineItemIdAttachmentsRoute,
  getTimelineRoute,
  patchTimelineIdRoute,
  postTimelineItemIdAttachmentsRoute,
  postTimelineRoute,
  putTimelineIdRoute,
} from '../routes'

export const getTimelineRouteHandler: RouteHandler<typeof getTimelineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimelineRouteHandler: RouteHandler<typeof postTimelineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTimelineIdRouteHandler: RouteHandler<typeof deleteTimelineIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTimelineIdRouteHandler: RouteHandler<typeof getTimelineIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTimelineIdRouteHandler: RouteHandler<typeof patchTimelineIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putTimelineIdRouteHandler: RouteHandler<typeof putTimelineIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimelineItemIdAttachmentsRouteHandler: RouteHandler<
  typeof getTimelineItemIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTimelineItemIdAttachmentsRouteHandler: RouteHandler<
  typeof postTimelineItemIdAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTimelineItemIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof deleteTimelineItemIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTimelineItemIdAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getTimelineItemIdAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
