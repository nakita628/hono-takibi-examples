import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceScriptsDeleteBulkRoute,
  getEmbeddingsQueryHubScriptsRoute,
  getScriptsHubGetFullPathRoute,
  getScriptsHubGetPathRoute,
  getScriptsHubPickPathRoute,
  getScriptsHubTopRoute,
  getScriptsUTokenedRawWorkspaceTokenPathRoute,
  getWWorkspaceRunnablesCountsRoute,
  getWWorkspaceRunnablesListRoute,
  getWWorkspaceScriptsCiTestResultsKindPathRoute,
  getWWorkspaceScriptsDeploymentStatusHHashRoute,
  getWWorkspaceScriptsExistsPPathRoute,
  getWWorkspaceScriptsGetHHashRoute,
  getWWorkspaceScriptsGetLatestVersionPathRoute,
  getWWorkspaceScriptsGetPPathRoute,
  getWWorkspaceScriptsGetTriggersCountPathRoute,
  getWWorkspaceScriptsHistoryPPathRoute,
  getWWorkspaceScriptsListDedicatedWithDepsRoute,
  getWWorkspaceScriptsListPathsFromWorkspaceRunnablePathRoute,
  getWWorkspaceScriptsListPathsRoute,
  getWWorkspaceScriptsListRoute,
  getWWorkspaceScriptsListSearchRoute,
  getWWorkspaceScriptsListTokensPathRoute,
  getWWorkspaceScriptsRawHPathRoute,
  getWWorkspaceScriptsRawPPathRoute,
  postWWorkspaceScriptsArchiveHHashRoute,
  postWWorkspaceScriptsArchivePPathRoute,
  postWWorkspaceScriptsCheckSchemaContractsRoute,
  postWWorkspaceScriptsCiTestResultsBatchRoute,
  postWWorkspaceScriptsCreateRoute,
  postWWorkspaceScriptsDeleteHHashRoute,
  postWWorkspaceScriptsDeletePPathRoute,
  postWWorkspaceScriptsHistoryUpdateHHashPPathRoute,
  postWWorkspaceScriptsRawTempDiffRoute,
  postWWorkspaceScriptsRawTempStoreRoute,
  postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPathRoute,
  postWWorkspaceScriptsTriggerCiTestsBatchRoute,
  postWWorkspaceScriptsUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptHandler = app
  .openapi(getScriptsHubGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsHubGetFullPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsHubPickPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsHubTopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmbeddingsQueryHubScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsArchivePPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsArchiveHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsDeleteHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsDeletePPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceScriptsDeleteBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetTriggersCountPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListTokensPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsHistoryPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListPathsFromWorkspaceRunnablePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetLatestVersionPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsHistoryUpdateHHashPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsListDedicatedWithDepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsRawPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsUTokenedRawWorkspaceTokenPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsExistsPPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsGetHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsRawHPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsDeploymentStatusHHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceScriptsCiTestResultsKindPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsCiTestResultsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsTriggerCiTestsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsCheckSchemaContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsRawTempStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceScriptsRawTempDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRunnablesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceRunnablesCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
