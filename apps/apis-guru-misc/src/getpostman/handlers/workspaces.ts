import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteWorkspacesWorkspaceIdRoute,
  getWorkspacesRoute,
  getWorkspacesWorkspaceIdRoute,
  postWorkspacesRoute,
  putWorkspacesWorkspaceIdRoute,
} from '../routes'

export const getWorkspacesRouteHandler: RouteHandler<typeof getWorkspacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postWorkspacesRouteHandler: RouteHandler<typeof postWorkspacesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof deleteWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof getWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putWorkspacesWorkspaceIdRouteHandler: RouteHandler<
  typeof putWorkspacesWorkspaceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
