import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApprovalRequestsIdRoute,
  deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
  getApiV2ApprovalRequestsIdRoute,
  getApiV2ApprovalRequestsRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
  getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
  postApiV2ApprovalRequestsIdApplyRoute,
  postApiV2ApprovalRequestsIdReviewsRoute,
  postApiV2ApprovalRequestsRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsRoute,
  postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const approvalsHandler = app
  .openapi(getApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApprovalRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApprovalRequestsIdReviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsFlagCopyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdApplyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiV2ProjectsProjectKeyFlagsFeatureFlagKeyEnvironmentsEnvironmentKeyApprovalRequestsIdReviewsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
