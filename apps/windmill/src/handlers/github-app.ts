import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGithubAppGhesAssignWorkspaceIdInstallationIdRoute,
  getGithubAppConnectedRepositoriesRoute,
  getGithubAppGhesConfigRoute,
  getGithubAppGhesDiscoverRoute,
  postGithubAppGhesAssignRoute,
} from '../routes'

export const getGithubAppConnectedRepositoriesRouteHandler: RouteHandler<
  typeof getGithubAppConnectedRepositoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubAppGhesConfigRouteHandler: RouteHandler<
  typeof getGithubAppGhesConfigRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGithubAppGhesDiscoverRouteHandler: RouteHandler<
  typeof getGithubAppGhesDiscoverRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGithubAppGhesAssignRouteHandler: RouteHandler<
  typeof postGithubAppGhesAssignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteGithubAppGhesAssignWorkspaceIdInstallationIdRouteHandler: RouteHandler<
  typeof deleteGithubAppGhesAssignWorkspaceIdInstallationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
