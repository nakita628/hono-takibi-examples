import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransitGatewayRouteTableAttachmentsAttachmentIdRoute,
  postTransitGatewayRouteTableAttachmentsRoute,
} from '../routes'

export const postTransitGatewayRouteTableAttachmentsRouteHandler: RouteHandler<
  typeof postTransitGatewayRouteTableAttachmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransitGatewayRouteTableAttachmentsAttachmentIdRouteHandler: RouteHandler<
  typeof getTransitGatewayRouteTableAttachmentsAttachmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
