import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
  patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduledChangesHandler = app
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyScheduledChangesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
