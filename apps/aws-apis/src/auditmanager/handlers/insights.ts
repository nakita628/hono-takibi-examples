import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getInsightsAssessmentsAssessmentIdRoute,
  getInsightsControlDomainsByAssessmentAssessmentIdRoute,
  getInsightsControlDomainsRoute,
  getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute,
  getInsightsControlsControlDomainIdRoute,
  getInsightsRoute,
} from '../routes'

export const getInsightsRouteHandler: RouteHandler<typeof getInsightsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsightsAssessmentsAssessmentIdRouteHandler: RouteHandler<
  typeof getInsightsAssessmentsAssessmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsightsControlsByAssessmentControlDomainIdAssessmentIdRouteHandler: RouteHandler<
  typeof getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsightsControlDomainsRouteHandler: RouteHandler<
  typeof getInsightsControlDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsightsControlDomainsByAssessmentAssessmentIdRouteHandler: RouteHandler<
  typeof getInsightsControlDomainsByAssessmentAssessmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getInsightsControlsControlDomainIdRouteHandler: RouteHandler<
  typeof getInsightsControlsControlDomainIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
