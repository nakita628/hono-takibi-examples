import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIndexAsyncSearchRoute,
  putIndexBulkRoute,
  postIndexBulkRoute,
  putIndexCcrFollowRoute,
  getIndexCcrInfoRoute,
  getIndexCcrStatsRoute,
  postIndexCcrForgetFollowerRoute,
  postIndexCcrPauseFollowRoute,
  postIndexCcrResumeFollowRoute,
  postIndexCcrUnfollowRoute,
  getIndexCountRoute,
  postIndexCountRoute,
  putIndexCreateIdRoute,
  postIndexCreateIdRoute,
  getIndexDocIdRoute,
  putIndexDocIdRoute,
  postIndexDocIdRoute,
  deleteIndexDocIdRoute,
  headIndexDocIdRoute,
  postIndexDeleteByQueryRoute,
  getIndexEqlSearchRoute,
  postIndexEqlSearchRoute,
  getIndexSourceIdRoute,
  headIndexSourceIdRoute,
  getIndexExplainIdRoute,
  postIndexExplainIdRoute,
  getIndexFieldCapsRoute,
  postIndexFieldCapsRoute,
  getIndexFleetGlobalCheckpointsRoute,
  getIndexFleetFleetMsearchRoute,
  postIndexFleetFleetMsearchRoute,
  getIndexFleetFleetSearchRoute,
  postIndexFleetFleetSearchRoute,
  getIndexGraphExploreRoute,
  postIndexGraphExploreRoute,
  getIndexIlmExplainRoute,
  postIndexIlmRemoveRoute,
  postIndexIlmRetryRoute,
  postIndexDocRoute,
  putIndexBlockBlockRoute,
  deleteIndexBlockBlockRoute,
  getIndexAnalyzeRoute,
  postIndexAnalyzeRoute,
  postIndexCacheClearRoute,
  putIndexCloneTargetRoute,
  postIndexCloneTargetRoute,
  postIndexCloseRoute,
  getIndexRoute,
  putIndexRoute,
  deleteIndexRoute,
  headIndexRoute,
  getIndexAliasNameRoute,
  putIndexAliasNameRoute,
  postIndexAliasNameRoute,
  deleteIndexAliasNameRoute,
  headIndexAliasNameRoute,
  putIndexAliasesNameRoute,
  postIndexAliasesNameRoute,
  deleteIndexAliasesNameRoute,
  postIndexDiskUsageRoute,
  postIndexDownsampleTargetIndexRoute,
  getIndexLifecycleExplainRoute,
  getIndexFieldUsageStatsRoute,
  getIndexFlushRoute,
  postIndexFlushRoute,
  postIndexForcemergeRoute,
  getIndexAliasRoute,
  getIndexMappingFieldFieldsRoute,
  getIndexMappingRoute,
  putIndexMappingRoute,
  postIndexMappingRoute,
  getIndexSettingsRoute,
  putIndexSettingsRoute,
  getIndexSettingsNameRoute,
  postIndexOpenRoute,
  getIndexRecoveryRoute,
  getIndexRefreshRoute,
  postIndexRefreshRoute,
  getIndexReloadSearchAnalyzersRoute,
  postIndexReloadSearchAnalyzersRoute,
  getIndexSegmentsRoute,
  getIndexShardStoresRoute,
  putIndexShrinkTargetRoute,
  postIndexShrinkTargetRoute,
  putIndexSplitTargetRoute,
  postIndexSplitTargetRoute,
  getIndexStatsRoute,
  getIndexStatsMetricRoute,
  getIndexValidateQueryRoute,
  postIndexValidateQueryRoute,
  getIndexKnnEvalRoute,
  postIndexKnnEvalRoute,
  getIndexMgetRoute,
  postIndexMgetRoute,
  getIndexMigrationDeprecationsRoute,
  getIndexMsearchRoute,
  postIndexMsearchRoute,
  getIndexMsearchTemplateRoute,
  postIndexMsearchTemplateRoute,
  getIndexMtermvectorsRoute,
  postIndexMtermvectorsRoute,
  postIndexPitRoute,
  getIndexRankEvalRoute,
  postIndexRankEvalRoute,
  getIndexRollupDataRoute,
  getIndexRollupSearchRoute,
  postIndexRollupSearchRoute,
  getIndexSearchRoute,
  postIndexSearchRoute,
  getIndexMvtFieldZoomXYRoute,
  postIndexMvtFieldZoomXYRoute,
  getIndexSearchShardsRoute,
  postIndexSearchShardsRoute,
  getIndexSearchTemplateRoute,
  postIndexSearchTemplateRoute,
  postIndexSearchableSnapshotsCacheClearRoute,
  getIndexSearchableSnapshotsStatsRoute,
  getIndexTermsEnumRoute,
  postIndexTermsEnumRoute,
  getIndexTermvectorsIdRoute,
  postIndexTermvectorsIdRoute,
  getIndexTermvectorsRoute,
  postIndexTermvectorsRoute,
  postIndexUpdateIdRoute,
  postIndexUpdateByQueryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indexHandler = app
  .openapi(postIndexAsyncSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexBulkRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexBulkRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexCcrFollowRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexCcrInfoRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexCcrStatsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCcrForgetFollowerRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCcrPauseFollowRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCcrResumeFollowRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCcrUnfollowRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexCountRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCountRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexCreateIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCreateIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexDocIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexDocIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexDocIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(deleteIndexDocIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(headIndexDocIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexDeleteByQueryRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexEqlSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexEqlSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexSourceIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(headIndexSourceIdRoute, (c) => {
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
  .openapi(getIndexFleetGlobalCheckpointsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexFleetFleetMsearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexFleetFleetMsearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexFleetFleetSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexFleetFleetSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexGraphExploreRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexGraphExploreRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexIlmExplainRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexIlmRemoveRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexIlmRetryRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexDocRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexBlockBlockRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(deleteIndexBlockBlockRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexAnalyzeRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexAnalyzeRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCacheClearRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexCloneTargetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCloneTargetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexCloseRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(deleteIndexRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(headIndexRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexAliasNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexAliasNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexAliasNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(deleteIndexAliasNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(headIndexAliasNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexAliasesNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexAliasesNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(deleteIndexAliasesNameRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexDiskUsageRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexDownsampleTargetIndexRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexLifecycleExplainRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexFieldUsageStatsRoute, (c) => {
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
  .openapi(getIndexAliasRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexMappingFieldFieldsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexMappingRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexMappingRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexMappingRoute, (c) => {
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
  .openapi(postIndexOpenRoute, (c) => {
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
  .openapi(getIndexReloadSearchAnalyzersRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexReloadSearchAnalyzersRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexSegmentsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexShardStoresRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexShrinkTargetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexShrinkTargetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(putIndexSplitTargetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexSplitTargetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexStatsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexStatsMetricRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexValidateQueryRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexValidateQueryRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexKnnEvalRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexKnnEvalRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexMgetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexMgetRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexMigrationDeprecationsRoute, (c) => {
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
  .openapi(postIndexPitRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexRankEvalRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexRankEvalRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexRollupDataRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexRollupSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexRollupSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexSearchRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexMvtFieldZoomXYRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexMvtFieldZoomXYRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexSearchShardsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexSearchShardsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexSearchTemplateRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexSearchTemplateRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexSearchableSnapshotsCacheClearRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexSearchableSnapshotsStatsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexTermsEnumRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexTermsEnumRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexTermvectorsIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexTermvectorsIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(getIndexTermvectorsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexTermvectorsRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexUpdateIdRoute, (c) => {
  throw new Error('Not implemented')
})
  .openapi(postIndexUpdateByQueryRoute, (c) => {
  throw new Error('Not implemented')
})
export * from './async-search'
export * from './index'
export * from './bulk'
export * from './reindex'
export * from './cat'
export * from './ccr'
export * from './search'
export * from './pit'
export * from './cluster'
export * from './component-template'
export * from './info'
export * from './remote'
export * from './connector'
export * from './count'
export * from './dangling'
export * from './delete-by-query'
export * from './scripts'
export * from './encryption'
export * from './enrich'
export * from './eql'
export * from './query'
export * from './features'
export * from './field-caps'
export * from './fleet'
export * from './script-context'
export * from './script-language'
export * from './health-report'
export * from './ilm'
export * from './analyze'
export * from './migration'
export * from './cache'
export * from './data-stream'
export * from './create-from'
export * from './index-template'
export * from './template'
export * from './alias'
export * from './flush'
export * from './forcemerge'
export * from './lifecycle'
export * from './mapping'
export * from './settings'
export * from './recovery'
export * from './refresh'
export * from './resolve'
export * from './segments'
export * from './shard-stores'
export * from './stats'
export * from './aliases'
export * from './validate'
export * from './inference'
export * from './__root'
export * from './ingest'
export * from './license'
export * from './logstash'
export * from './mget'
export * from './ml'
export * from './msearch'
export * from './mtermvectors'
export * from './nodes'
export * from './prometheus'
export * from './query-rules'
export * from './rank-eval'
export * from './render'
export * from './rollup'
export * from './application'
export * from './search-shards'
export * from './searchable-snapshots'
export * from './snapshot'
export * from './security'
export * from './slm'
export * from './sql'
export * from './ssl'
export * from './streams'
export * from './synonyms'
export * from './tasks'
export * from './text-structure'
export * from './transform'
export * from './update-by-query'
export * from './watcher'
export * from './xpack'
