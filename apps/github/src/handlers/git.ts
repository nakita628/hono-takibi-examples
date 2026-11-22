import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReposOwnerRepoGitRefsRefRoute,
  getReposOwnerRepoGitBlobsFileShaRoute,
  getReposOwnerRepoGitCommitsCommitShaRoute,
  getReposOwnerRepoGitMatchingRefsRefRoute,
  getReposOwnerRepoGitRefRefRoute,
  getReposOwnerRepoGitTagsTagShaRoute,
  getReposOwnerRepoGitTreesTreeShaRoute,
  patchReposOwnerRepoGitRefsRefRoute,
  postReposOwnerRepoGitBlobsRoute,
  postReposOwnerRepoGitCommitsRoute,
  postReposOwnerRepoGitRefsRoute,
  postReposOwnerRepoGitTagsRoute,
  postReposOwnerRepoGitTreesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gitHandler = app
  .openapi(postReposOwnerRepoGitBlobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitBlobsFileShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitCommitsCommitShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitMatchingRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitRefRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReposOwnerRepoGitRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReposOwnerRepoGitRefsRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitTagsTagShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReposOwnerRepoGitTreesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReposOwnerRepoGitTreesTreeShaRoute, (c) => {
    throw new Error('Not implemented')
  })
