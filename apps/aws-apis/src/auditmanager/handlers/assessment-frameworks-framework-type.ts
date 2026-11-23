import type { RouteHandler } from '@hono/zod-openapi'
import type { getAssessmentFrameworksFrameworkTypeRoute } from '../routes'

export const getAssessmentFrameworksFrameworkTypeRouteHandler: RouteHandler<
  typeof getAssessmentFrameworksFrameworkTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
