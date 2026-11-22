import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBuildsWorkersScriptTagRoute,
  deleteAccountsAccountIdWorkersWorkersWorkerIdRoute,
  getAccountsAccountIdBuildsWorkersExternalScriptIdBuildsRoute,
  getAccountsAccountIdBuildsWorkersExternalScriptIdTriggersRoute,
  getAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdBuildsRoute,
  getAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdRoute,
  getAccountsAccountIdBuildsWorkersScriptTagPreviewsRoute,
  getAccountsAccountIdBuildsWorkersScriptTagRoute,
  getAccountsAccountIdWorkersWorkersRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdRoute,
  patchAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdRoute,
  patchAccountsAccountIdBuildsWorkersScriptTagRoute,
  patchAccountsAccountIdWorkersWorkersWorkerIdRoute,
  postAccountsAccountIdBuildsWorkersExternalScriptIdBuildsRoute,
  postAccountsAccountIdBuildsWorkersRoute,
  postAccountsAccountIdBuildsWorkersScriptTagBuildsBuildUuidRetryRoute,
  postAccountsAccountIdBuildsWorkersScriptTagMigrateToPreviewsRoute,
  postAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdBuildsRoute,
  postAccountsAccountIdBuildsWorkersScriptTagPurgeBuildCacheRoute,
  postAccountsAccountIdWorkersWorkersRoute,
  putAccountsAccountIdWorkersWorkersWorkerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersHandler = app
  .openapi(postAccountsAccountIdBuildsWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersExternalScriptIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsWorkersExternalScriptIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersExternalScriptIdTriggersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBuildsWorkersScriptTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersScriptTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBuildsWorkersScriptTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsWorkersScriptTagBuildsBuildUuidRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsWorkersScriptTagMigrateToPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersScriptTagPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsWorkersScriptTagPreviewsPreviewIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBuildsWorkersScriptTagPurgeBuildCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersWorkersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersWorkersWorkerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersWorkersWorkerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersWorkersWorkerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
