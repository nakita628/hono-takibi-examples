import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIndexAliasesNameRoute,
  deleteIndexAliasNameRoute,
  deleteIndexDocIdRoute,
  deleteIndexRoute,
  getIndexAliasNameRoute,
  getIndexAliasRoute,
  getIndexAnalyzeRoute,
  getIndexCountRoute,
  getIndexDocIdRoute,
  getIndexExplainIdRoute,
  getIndexFieldCapsRoute,
  getIndexFlushRoute,
  getIndexIngestionStateRoute,
  getIndexMappingFieldFieldsRoute,
  getIndexMappingRoute,
  getIndexMgetRoute,
  getIndexMsearchRoute,
  getIndexMsearchTemplateRoute,
  getIndexMtermvectorsRoute,
  getIndexRankEvalRoute,
  getIndexRecoveryRoute,
  getIndexRefreshRoute,
  getIndexRoute,
  getIndexSearchRoute,
  getIndexSearchShardsRoute,
  getIndexSearchTemplateRoute,
  getIndexSegmentsRoute,
  getIndexSettingsNameRoute,
  getIndexSettingsRoute,
  getIndexShardStoresRoute,
  getIndexSourceIdRoute,
  getIndexStatsMetricRoute,
  getIndexStatsRoute,
  getIndexTermvectorsIdRoute,
  getIndexTermvectorsRoute,
  getIndexUpgradeRoute,
  getIndexValidateQueryRoute,
  headIndexAliasNameRoute,
  headIndexDocIdRoute,
  headIndexRoute,
  headIndexSourceIdRoute,
  postIndexAliasesNameRoute,
  postIndexAliasNameRoute,
  postIndexAnalyzeRoute,
  postIndexBulkRoute,
  postIndexBulkStreamRoute,
  postIndexCacheClearRoute,
  postIndexCloneTargetRoute,
  postIndexCloseRoute,
  postIndexCountRoute,
  postIndexCreateIdRoute,
  postIndexDeleteByQueryRoute,
  postIndexDocIdRoute,
  postIndexDocRoute,
  postIndexExplainIdRoute,
  postIndexFieldCapsRoute,
  postIndexFlushRoute,
  postIndexForcemergeRoute,
  postIndexIngestionPauseRoute,
  postIndexIngestionResumeRoute,
  postIndexMappingRoute,
  postIndexMgetRoute,
  postIndexMsearchRoute,
  postIndexMsearchTemplateRoute,
  postIndexMtermvectorsRoute,
  postIndexOpenRoute,
  postIndexRankEvalRoute,
  postIndexRefreshRoute,
  postIndexSearchPointInTimeRoute,
  postIndexSearchRoute,
  postIndexSearchShardsRoute,
  postIndexSearchTemplateRoute,
  postIndexShrinkTargetRoute,
  postIndexSplitTargetRoute,
  postIndexTermvectorsIdRoute,
  postIndexTermvectorsRoute,
  postIndexUpdateByQueryRoute,
  postIndexUpdateIdRoute,
  postIndexUpgradeRoute,
  postIndexValidateQueryRoute,
  putIndexAliasesNameRoute,
  putIndexAliasesRoute,
  putIndexAliasNameRoute,
  putIndexAliasRoute,
  putIndexBlockBlockRoute,
  putIndexBulkRoute,
  putIndexBulkStreamRoute,
  putIndexCloneTargetRoute,
  putIndexCreateIdRoute,
  putIndexDocIdRoute,
  putIndexMappingRoute,
  putIndexRoute,
  putIndexSettingsRoute,
  putIndexShrinkTargetRoute,
  putIndexSplitTargetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexHandler = app
  .openapi(deleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexAliasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexBlockBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexBulkStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexBulkStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCloneTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexCloneTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexCreateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexCreateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDeleteByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDocRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexDocIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexExplainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexExplainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexFieldCapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexForcemergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMappingFieldFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMsearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexMtermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexRankEvalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchPointInTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSearchTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexShardStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexShrinkTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexShrinkTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSplitTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexSplitTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTermvectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTermvectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTermvectorsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexUpdateByQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexUpdateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexIngestionPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexIngestionResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexIngestionStateRoute, (c) => {
    throw new Error('Not implemented')
  })
 from './flush'
export * from './forcemerge'
export * from './indexTemplate'
export * from './ingest'
export * from './insights'
export * from './list'
export * from './ltr'
export * from './mapping'
export * from './mget'
export * from './msearch'
export * from './mtermvectors'
export * from './nodes'
export * from './opendistro'
export * from './plugins'
export * from './rankEval'
export * from './recovery'
export * from './refresh'
export * from './reindex'
export * from './remote'
export * from './remotestore'
export * from './render'
export * from './resolve'
export * from './scriptContext'
export * from './scriptLanguage'
export * from './scripts'
export * from './search'
export * from './searchShards'
export * from './segments'
export * from './settings'
export * from './shardStores'
export * from './snapshot'
export * from './stats'
export * from './tasks'
export * from './template'
export * from './updateByQuery'
export * from './upgrade'
export * from './validate'
export * from './wlm'
export * from './index'
