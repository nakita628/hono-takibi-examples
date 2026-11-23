import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteClusterPeerPeerIdRoute,
  getClusterRoute,
  getClusterTelemetryRoute,
  postClusterRecoverRoute,
} from '../routes'

export const getClusterRouteHandler: RouteHandler<typeof getClusterRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getClusterTelemetryRouteHandler: RouteHandler<
  typeof getClusterTelemetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postClusterRecoverRouteHandler: RouteHandler<typeof postClusterRecoverRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteClusterPeerPeerIdRouteHandler: RouteHandler<
  typeof deleteClusterPeerPeerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
