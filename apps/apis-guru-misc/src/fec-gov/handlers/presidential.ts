import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPresidentialContributionsByCandidateIndexRoute,
  getPresidentialContributionsBySizeIndexRoute,
  getPresidentialContributionsByStateIndexRoute,
  getPresidentialCoverageEndDateIndexRoute,
  getPresidentialFinancialSummaryIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const presidentialHandler = app
  .openapi(getPresidentialContributionsByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresidentialContributionsBySizeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresidentialContributionsByStateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresidentialCoverageEndDateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPresidentialFinancialSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
