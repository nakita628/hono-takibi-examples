import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInsightsAssessmentsAssessmentIdRoute,
  getInsightsControlDomainsByAssessmentAssessmentIdRoute,
  getInsightsControlDomainsRoute,
  getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute,
  getInsightsControlsControlDomainIdRoute,
  getInsightsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsHandler = app
  .openapi(getInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsAssessmentsAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsControlsByAssessmentControlDomainIdAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsControlDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsControlDomainsByAssessmentAssessmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInsightsControlsControlDomainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
