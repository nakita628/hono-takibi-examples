import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAnalysesAnalysisIdAlertsRoute,
  getAnalysesAnalysisIdRoute,
  getAnalysesProjectIdCommitsCommitIdRoute,
  postAnalysesProjectIdRoute,
} from '../routes'

export const getAnalysesAnalysisIdRouteHandler: RouteHandler<
  typeof getAnalysesAnalysisIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalysesAnalysisIdAlertsRouteHandler: RouteHandler<
  typeof getAnalysesAnalysisIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAnalysesProjectIdRouteHandler: RouteHandler<
  typeof postAnalysesProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAnalysesProjectIdCommitsCommitIdRouteHandler: RouteHandler<
  typeof getAnalysesProjectIdCommitsCommitIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
