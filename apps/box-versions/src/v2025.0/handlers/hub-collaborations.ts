import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteHubCollaborationsHubCollaborationIdRoute,
  getHubCollaborationsHubCollaborationIdRoute,
  getHubCollaborationsRoute,
  postHubCollaborationsRoute,
  putHubCollaborationsHubCollaborationIdRoute,
} from '../routes'

export const getHubCollaborationsRouteHandler: RouteHandler<
  typeof getHubCollaborationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubCollaborationsRouteHandler: RouteHandler<
  typeof postHubCollaborationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getHubCollaborationsHubCollaborationIdRouteHandler: RouteHandler<
  typeof getHubCollaborationsHubCollaborationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putHubCollaborationsHubCollaborationIdRouteHandler: RouteHandler<
  typeof putHubCollaborationsHubCollaborationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteHubCollaborationsHubCollaborationIdRouteHandler: RouteHandler<
  typeof deleteHubCollaborationsHubCollaborationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
