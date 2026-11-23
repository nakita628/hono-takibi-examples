import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCollaborationsCollaborationIdRoute,
  getCollaborationsCollaborationIdRoute,
  getCollaborationsRoute,
  postCollaborationsRoute,
  putCollaborationsCollaborationIdRoute,
} from '../routes'

export const getCollaborationsRouteHandler: RouteHandler<typeof getCollaborationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCollaborationsRouteHandler: RouteHandler<typeof postCollaborationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteCollaborationsCollaborationIdRouteHandler: RouteHandler<
  typeof deleteCollaborationsCollaborationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCollaborationsCollaborationIdRouteHandler: RouteHandler<
  typeof getCollaborationsCollaborationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putCollaborationsCollaborationIdRouteHandler: RouteHandler<
  typeof putCollaborationsCollaborationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
