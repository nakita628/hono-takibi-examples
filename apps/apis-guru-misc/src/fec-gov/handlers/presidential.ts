import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPresidentialContributionsByCandidateIndexRoute,
  getPresidentialContributionsBySizeIndexRoute,
  getPresidentialContributionsByStateIndexRoute,
  getPresidentialCoverageEndDateIndexRoute,
  getPresidentialFinancialSummaryIndexRoute,
} from '../routes'

export const getPresidentialContributionsByCandidateIndexRouteHandler: RouteHandler<
  typeof getPresidentialContributionsByCandidateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresidentialContributionsBySizeIndexRouteHandler: RouteHandler<
  typeof getPresidentialContributionsBySizeIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresidentialContributionsByStateIndexRouteHandler: RouteHandler<
  typeof getPresidentialContributionsByStateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresidentialCoverageEndDateIndexRouteHandler: RouteHandler<
  typeof getPresidentialCoverageEndDateIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPresidentialFinancialSummaryIndexRouteHandler: RouteHandler<
  typeof getPresidentialFinancialSummaryIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
