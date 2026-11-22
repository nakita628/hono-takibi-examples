import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute,
  deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute,
  getRepositoriesWorkspaceRepoSlugCommitCommitRoute,
  getRepositoriesWorkspaceRepoSlugCommitsRevisionRoute,
  getRepositoriesWorkspaceRepoSlugCommitsRoute,
  getRepositoriesWorkspaceRepoSlugDiffSpecRoute,
  getRepositoriesWorkspaceRepoSlugDiffstatSpecRoute,
  getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute,
  getRepositoriesWorkspaceRepoSlugPatchSpecRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute,
  postRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute,
  postRepositoriesWorkspaceRepoSlugCommitsRevisionRoute,
  postRepositoriesWorkspaceRepoSlugCommitsRoute,
  putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commitsHandler = app
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitCommitCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRepositoriesWorkspaceRepoSlugCommitCommitCommentsCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugCommitsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesWorkspaceRepoSlugCommitsRevisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDiffSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugDiffstatSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugMergeBaseRevspecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRepositoriesWorkspaceRepoSlugPatchSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
