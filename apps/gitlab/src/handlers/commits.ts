import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdRepositoryCommitsRoute,
  getApiV4ProjectsIdRepositoryCommitsShaCommentsRoute,
  getApiV4ProjectsIdRepositoryCommitsShaDiffRoute,
  getApiV4ProjectsIdRepositoryCommitsShaMergeRequestsRoute,
  getApiV4ProjectsIdRepositoryCommitsShaRefsRoute,
  getApiV4ProjectsIdRepositoryCommitsShaRoute,
  getApiV4ProjectsIdRepositoryCommitsShaSequenceRoute,
  getApiV4ProjectsIdRepositoryCommitsShaSignatureRoute,
  postApiV4ProjectsIdRepositoryCommitsRoute,
  postApiV4ProjectsIdRepositoryCommitsShaCherryPickRoute,
  postApiV4ProjectsIdRepositoryCommitsShaCommentsRoute,
  postApiV4ProjectsIdRepositoryCommitsShaRevertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const commitsHandler = app
  .openapi(getApiV4ProjectsIdRepositoryCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryCommitsShaCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaSequenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryCommitsShaCherryPickRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryCommitsShaRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaRefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaMergeRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCommitsShaSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
