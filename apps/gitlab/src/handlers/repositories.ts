import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdRepositoryArchiveRoute,
  getApiV4ProjectsIdRepositoryBlobsShaRawRoute,
  getApiV4ProjectsIdRepositoryBlobsShaRoute,
  getApiV4ProjectsIdRepositoryChangedPathsRoute,
  getApiV4ProjectsIdRepositoryChangelogRoute,
  getApiV4ProjectsIdRepositoryCompareRoute,
  getApiV4ProjectsIdRepositoryContributorsRoute,
  getApiV4ProjectsIdRepositoryDiffStatsRoute,
  getApiV4ProjectsIdRepositoryDivergingCommitsRoute,
  getApiV4ProjectsIdRepositoryHealthRoute,
  getApiV4ProjectsIdRepositoryMergeBaseRoute,
  getApiV4ProjectsIdRepositoryTreeRoute,
  postApiV4ProjectsIdRepositoryBlobsBatchRoute,
  postApiV4ProjectsIdRepositoryChangelogRoute,
} from '../routes'

const app = new OpenAPIHono()

export const repositoriesHandler = app
  .openapi(getApiV4ProjectsIdRepositoryTreeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryBlobsShaRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryBlobsShaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryCompareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryContributorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryMergeBaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryBlobsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryChangedPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryDivergingCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryDiffStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdRepositoryChangelogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdRepositoryChangelogRoute, (c) => {
    throw new Error('Not implemented')
  })
