import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDatasetsNamespaceRepoResolveRevPathRoute,
  getDatasetsNamespaceRepoUserAccessReportRoute,
  postDatasetsNamespaceRepoAskAccessRoute,
} from '../routes'

export const getDatasetsNamespaceRepoResolveRevPathRouteHandler: RouteHandler<
  typeof getDatasetsNamespaceRepoResolveRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasetsNamespaceRepoAskAccessRouteHandler: RouteHandler<
  typeof postDatasetsNamespaceRepoAskAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasetsNamespaceRepoUserAccessReportRouteHandler: RouteHandler<
  typeof getDatasetsNamespaceRepoUserAccessReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
