import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAssociationsAssociationArnRoute,
  getAssociationsAssociationArnRoute,
  getAssociationsRoute,
  postAssociationsRoute,
} from '../routes'

export const postAssociationsRouteHandler: RouteHandler<typeof postAssociationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAssociationsRouteHandler: RouteHandler<typeof getAssociationsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAssociationsAssociationArnRouteHandler: RouteHandler<
  typeof getAssociationsAssociationArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAssociationsAssociationArnRouteHandler: RouteHandler<
  typeof deleteAssociationsAssociationArnRoute
> = async (c) => {
  throw new Error('Not implemented')
}
