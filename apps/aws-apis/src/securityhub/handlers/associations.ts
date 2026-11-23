import type { RouteHandler } from '@hono/zod-openapi'
import type { patchAssociationsRoute, postAssociationsBatchGetRoute } from '../routes'

export const postAssociationsBatchGetRouteHandler: RouteHandler<
  typeof postAssociationsBatchGetRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAssociationsRouteHandler: RouteHandler<typeof patchAssociationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
