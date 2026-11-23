import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getTransitGatewayPeeringsPeeringIdRoute,
  postTransitGatewayPeeringsRoute,
} from '../routes'

export const postTransitGatewayPeeringsRouteHandler: RouteHandler<
  typeof postTransitGatewayPeeringsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTransitGatewayPeeringsPeeringIdRouteHandler: RouteHandler<
  typeof getTransitGatewayPeeringsPeeringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
