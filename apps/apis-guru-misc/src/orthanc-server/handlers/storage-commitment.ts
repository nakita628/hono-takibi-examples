import type { RouteHandler } from '@hono/zod-openapi'
import type { getStorageCommitmentIdRoute, postStorageCommitmentIdRemoveRoute } from '../routes'

export const getStorageCommitmentIdRouteHandler: RouteHandler<
  typeof getStorageCommitmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStorageCommitmentIdRemoveRouteHandler: RouteHandler<
  typeof postStorageCommitmentIdRemoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
