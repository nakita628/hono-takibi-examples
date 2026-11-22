import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute,
  deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute,
  getRepositoriesWorkspaceRepoSlugComponentsComponentIdRoute,
  getRepositoriesWorkspaceRepoSlugComponentsRoute,
  getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRoute,
  getRepositoriesWorkspaceRepoSlugIssuesImportRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute,
  getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute,
  getRepositoriesWorkspaceRepoSlugIssuesRoute,
  getRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRoute,
  getRepositoriesWorkspaceRepoSlugMilestonesRoute,
  getRepositoriesWorkspaceRepoSlugVersionsRoute,
  getRepositoriesWorkspaceRepoSlugVersionsVersionIdRoute,
  postRepositoriesWorkspaceRepoSlugIssuesExportRoute,
  postRepositoriesWorkspaceRepoSlugIssuesImportRoute,
  postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute,
  postRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute,
  postRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute,
  postRepositoriesWorkspaceRepoSlugIssuesRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute,
  putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueTrackerHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugComponentsComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMilestonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMilestonesMilestoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
