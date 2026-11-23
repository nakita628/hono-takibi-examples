import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInboundAttachmentsDownloadTokenRoute,
  getInboundEventsRoute,
  getInboundEventsUuidRoute,
} from '../routes'

export const getInboundEventsRouteHandler: RouteHandler<typeof getInboundEventsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getInboundEventsUuidRouteHandler: RouteHandler<
  typeof getInboundEventsUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInboundAttachmentsDownloadTokenRouteHandler: RouteHandler<
  typeof getInboundAttachmentsDownloadTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}
