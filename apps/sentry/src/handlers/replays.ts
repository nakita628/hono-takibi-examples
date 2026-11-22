import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplayCountIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplaysIndexRoute,
  getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const replaysHandler = app
  .openapi(getOrganizationsOrganizationIdOrSlugReplayCountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReplaySelectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReplaysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReplaysReplayIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdClicksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdRecordingSegmentsSegmentIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysReplayIdViewedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReplaysJobsDeleteJobIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
