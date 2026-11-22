import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2ApprovalRequestsProjectsProjectKeySettingsRoute,
  patchApiV2ApprovalRequestsIdRoute,
  patchApiV2ApprovalRequestsProjectsProjectKeySettingsRoute,
  patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalsBetaHandler = app
  .openapi(patchApiV2ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2ApprovalRequestsProjectsProjectKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ApprovalRequestsProjectsProjectKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
