import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiDeploymentIdRoute,
  getAiDeploymentIdApiKeyRoute,
  getAiDeploymentIdLogsRoute,
  getAiDeploymentIdRoute,
  getAiDeploymentRoute,
  getAiHelpInferenceEngineParametersRoute,
  getAiInstanceTypeRoute,
  patchAiDeploymentIdRoute,
  postAiDeploymentIdScaleRoute,
  postAiDeploymentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deploymentHandler = app
  .openapi(getAiHelpInferenceEngineParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiDeploymentIdScaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiDeploymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiInstanceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiDeploymentIdApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiDeploymentIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
