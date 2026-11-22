import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DeploymentGatesGateIdRulesIdRoute,
  deleteApiV2DeploymentGatesIdRoute,
  getApiV2DeploymentGatesEvaluationsRoute,
  getApiV2DeploymentGatesEvaluationsRulesRoute,
  getApiV2DeploymentGatesGateIdRulesIdRoute,
  getApiV2DeploymentGatesGateIdRulesRoute,
  getApiV2DeploymentGatesIdRoute,
  getApiV2DeploymentGatesRoute,
  getApiV2DeploymentsGatesEvaluationIdRoute,
  postApiV2DeploymentGatesGateIdRulesRoute,
  postApiV2DeploymentGatesRoute,
  postApiV2DeploymentsGatesEvaluationRoute,
  putApiV2DeploymentGatesGateIdRulesIdRoute,
  putApiV2DeploymentGatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentGatesHandler = app
  .openapi(getApiV2DeploymentGatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DeploymentGatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeploymentGatesEvaluationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeploymentGatesEvaluationsRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeploymentGatesGateIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DeploymentGatesGateIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeploymentGatesGateIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeploymentGatesGateIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeploymentGatesGateIdRulesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DeploymentGatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeploymentGatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DeploymentGatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DeploymentsGatesEvaluationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DeploymentsGatesEvaluationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
