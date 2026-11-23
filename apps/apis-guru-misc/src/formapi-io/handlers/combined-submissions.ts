import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteCombinedSubmissionsCombinedSubmissionIdRoute,
  getCombinedSubmissionsCombinedSubmissionIdRoute,
  getCombinedSubmissionsRoute,
  postCombinedSubmissionsRoute,
} from '../routes'

export const getCombinedSubmissionsRouteHandler: RouteHandler<
  typeof getCombinedSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCombinedSubmissionsRouteHandler: RouteHandler<
  typeof postCombinedSubmissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteCombinedSubmissionsCombinedSubmissionIdRouteHandler: RouteHandler<
  typeof deleteCombinedSubmissionsCombinedSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCombinedSubmissionsCombinedSubmissionIdRouteHandler: RouteHandler<
  typeof getCombinedSubmissionsCombinedSubmissionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
