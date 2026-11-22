import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2VpcPeeringsVpcPeeringIdRoute,
  getV2VpcPeeringsRoute,
  getV2VpcPeeringsVpcPeeringIdRoute,
  patchV2VpcPeeringsVpcPeeringIdRoute,
  postV2VpcPeeringsRoute,
} from '../routes'

export const getV2VpcPeeringsRouteHandler: RouteHandler<typeof getV2VpcPeeringsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV2VpcPeeringsRouteHandler: RouteHandler<typeof postV2VpcPeeringsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2VpcPeeringsVpcPeeringIdRouteHandler: RouteHandler<
  typeof getV2VpcPeeringsVpcPeeringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2VpcPeeringsVpcPeeringIdRouteHandler: RouteHandler<
  typeof patchV2VpcPeeringsVpcPeeringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2VpcPeeringsVpcPeeringIdRouteHandler: RouteHandler<
  typeof deleteV2VpcPeeringsVpcPeeringIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
