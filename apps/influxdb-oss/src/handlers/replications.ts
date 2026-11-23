import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteReplicationsReplicationIDRoute,
  getReplicationsReplicationIDRoute,
  getReplicationsRoute,
  patchReplicationsReplicationIDRoute,
  postReplicationsReplicationIDValidateRoute,
  postReplicationsRoute,
} from '../routes'

export const getReplicationsRouteHandler: RouteHandler<typeof getReplicationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postReplicationsRouteHandler: RouteHandler<typeof postReplicationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getReplicationsReplicationIDRouteHandler: RouteHandler<
  typeof getReplicationsReplicationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchReplicationsReplicationIDRouteHandler: RouteHandler<
  typeof patchReplicationsReplicationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteReplicationsReplicationIDRouteHandler: RouteHandler<
  typeof deleteReplicationsReplicationIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postReplicationsReplicationIDValidateRouteHandler: RouteHandler<
  typeof postReplicationsReplicationIDValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
