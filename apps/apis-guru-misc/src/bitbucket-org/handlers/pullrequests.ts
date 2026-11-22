import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute,
  getPullrequestsSelectedUserRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRoute,
  getRepositoriesWorkspaceRepoSlugDefaultReviewersRoute,
  getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsActivityRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRoute,
  getRepositoriesWorkspaceRepoSlugPullrequestsRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute,
  postRepositoriesWorkspaceRepoSlugPullrequestsRoute,
  putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
  putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pullrequestsHandler = app
  .openapi(getPullrequestsSelectedUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDefaultReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugEffectiveDefaultReviewersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
