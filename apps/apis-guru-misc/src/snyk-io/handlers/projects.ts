import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  deleteOrgOrgIdProjectProjectIdRoute,
  deleteOrgOrgIdProjectProjectIdSettingsRoute,
  getOrgOrgIdProjectProjectIdDepGraphRoute,
  getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRoute,
  getOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  getOrgOrgIdProjectProjectIdIgnoresRoute,
  getOrgOrgIdProjectProjectIdIssueIssueIdPathsRoute,
  getOrgOrgIdProjectProjectIdJiraIssuesRoute,
  getOrgOrgIdProjectProjectIdRoute,
  getOrgOrgIdProjectProjectIdSettingsRoute,
  postOrgOrgIdProjectProjectIdActivateRoute,
  postOrgOrgIdProjectProjectIdAggregatedIssuesRoute,
  postOrgOrgIdProjectProjectIdAttributesRoute,
  postOrgOrgIdProjectProjectIdDeactivateRoute,
  postOrgOrgIdProjectProjectIdHistoryRoute,
  postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRoute,
  postOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRoute,
  postOrgOrgIdProjectProjectIdTagsRemoveRoute,
  postOrgOrgIdProjectProjectIdTagsRoute,
  postOrgOrgIdProjectsRoute,
  putOrgOrgIdProjectProjectIdIgnoreIssueIdRoute,
  putOrgOrgIdProjectProjectIdMoveRoute,
  putOrgOrgIdProjectProjectIdRoute,
  putOrgOrgIdProjectProjectIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(deleteOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdAggregatedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdDepGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdHistorySnapshotIdAggregatedIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdHistorySnapshotIdIssueIssueIdPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdIgnoreIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdIgnoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdIssueIssueIdJiraIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdIssueIssueIdPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdJiraIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrgOrgIdProjectProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrgOrgIdProjectProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrgOrgIdProjectProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectProjectIdTagsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrgOrgIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
