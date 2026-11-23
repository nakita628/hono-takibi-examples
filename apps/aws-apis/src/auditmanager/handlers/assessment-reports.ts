import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssessmentReportsRoute, postAssessmentReportsIntegrityRoute } from '../routes'

export const getAssessmentReportsRouteHandler: RouteHandler<
  typeof getAssessmentReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAssessmentReportsIntegrityRouteHandler: RouteHandler<
  typeof postAssessmentReportsIntegrityRoute
> = async (c) => {
  throw new Error('Not implemented')
}
