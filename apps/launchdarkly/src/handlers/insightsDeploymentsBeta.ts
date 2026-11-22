import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2EngineeringInsightsDeploymentsDeploymentIDRoute,
  getApiV2EngineeringInsightsDeploymentsRoute,
  patchApiV2EngineeringInsightsDeploymentsDeploymentIDRoute,
  postApiV2EngineeringInsightsDeploymentEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const insightsDeploymentsBetaHandler = app
  .openapi(postApiV2EngineeringInsightsDeploymentEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2EngineeringInsightsDeploymentsDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2EngineeringInsightsDeploymentsDeploymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
