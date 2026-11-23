import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getNamespaceRepoResolveRevPathRoute,
  getNamespaceRepoUserAccessReportRoute,
  postNamespaceRepoAskAccessRoute,
} from '../routes'

export const getNamespaceRepoResolveRevPathRouteHandler: RouteHandler<
  typeof getNamespaceRepoResolveRevPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postNamespaceRepoAskAccessRouteHandler: RouteHandler<
  typeof postNamespaceRepoAskAccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getNamespaceRepoUserAccessReportRouteHandler: RouteHandler<
  typeof getNamespaceRepoUserAccessReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
