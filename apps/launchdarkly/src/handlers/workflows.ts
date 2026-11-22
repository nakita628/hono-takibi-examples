import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowsHandler = app
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyWorkflowsWorkflowIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
