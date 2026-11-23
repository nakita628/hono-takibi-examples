import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiApiKeyIdRoute,
  deleteAiDeploymentIdRoute,
  deleteAiModelIdRoute,
  getAiApiKeyIdRevealRoute,
  getAiApiKeyIdRoute,
  getAiApiKeyRoute,
  getAiDeploymentIdApiKeyRoute,
  getAiDeploymentIdLogsRoute,
  getAiDeploymentIdRoute,
  getAiDeploymentRoute,
  getAiHelpInferenceEngineParametersRoute,
  getAiInstanceTypeRoute,
  getAiModelIdRoute,
  getAiModelRoute,
  getAiQuotaRoute,
  patchAiApiKeyIdRoute,
  patchAiDeploymentIdRoute,
  postAiApiKeyIdRotateRoute,
  postAiApiKeyRoute,
  postAiDeploymentIdScaleRoute,
  postAiDeploymentRoute,
  postAiModelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiHandler = app
  .openapi(getAiHelpInferenceEngineParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiModelRoute, (c) => {
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
  .openapi(deleteAiApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiApiKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiApiKeyIdRotateRoute, (c) => {
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
  .openapi(deleteAiModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiModelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiApiKeyIdRevealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiDeploymentIdApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiDeploymentIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
