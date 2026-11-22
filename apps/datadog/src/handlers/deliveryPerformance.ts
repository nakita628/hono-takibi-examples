import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DoraDeploymentDeploymentIdRoute,
  deleteApiV2DoraFailureFailureIdRoute,
  getApiV2DoraDeploymentsDeploymentIdRoute,
  getApiV2DoraFailuresFailureIdRoute,
  patchApiV2DoraDeploymentsDeploymentIdRoute,
  patchApiV2DoraDeploymentsRoute,
  postApiV2AiImpactUserActivityRoute,
  postApiV2DoraDeploymentRoute,
  postApiV2DoraDeploymentsRoute,
  postApiV2DoraFailureRoute,
  postApiV2DoraFailuresRoute,
  postApiV2DoraIncidentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deliveryPerformanceHandler = app
  .openapi(postApiV2AiImpactUserActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DoraDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DoraDeploymentDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DoraDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DoraDeploymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DoraDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2DoraDeploymentsDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DoraFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DoraFailureFailureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DoraFailuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DoraFailuresFailureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DoraIncidentRoute, (c) => {
    throw new Error('Not implemented')
  })
