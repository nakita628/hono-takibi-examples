import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteComponentTemplateNameRoute,
  deleteDanglingIndexUuidRoute,
  deleteDataStreamNameLifecycleRoute,
  deleteIndexAliasesNameRoute,
  deleteIndexAliasNameRoute,
  deleteIndexBlockBlockRoute,
  deleteIndexRoute,
  deleteIndexTemplateNameRoute,
  deleteTemplateNameRoute,
  getAliasNameRoute,
  getAliasRoute,
  getAnalyzeRoute,
  getComponentTemplateNameRoute,
  getComponentTemplateRoute,
  getDanglingRoute,
  getFlushRoute,
  getIndexAliasNameRoute,
  getIndexAliasRoute,
  getIndexAnalyzeRoute,
  getIndexFieldUsageStatsRoute,
  getIndexFlushRoute,
  getIndexMappingFieldFieldsRoute,
  getIndexMappingRoute,
  getIndexRecoveryRoute,
  getIndexRefreshRoute,
  getIndexReloadSearchAnalyzersRoute,
  getIndexRoute,
  getIndexSegmentsRoute,
  getIndexSettingsNameRoute,
  getIndexSettingsRoute,
  getIndexShardStoresRoute,
  getIndexStatsMetricRoute,
  getIndexStatsRoute,
  getIndexTemplateNameRoute,
  getIndexTemplateRoute,
  getIndexValidateQueryRoute,
  getMappingFieldFieldsRoute,
  getMappingRoute,
  getRecoveryRoute,
  getRefreshRoute,
  getResolveClusterNameRoute,
  getResolveClusterRoute,
  getResolveIndexNameRoute,
  getSegmentsRoute,
  getSettingsNameRoute,
  getSettingsRoute,
  getShardStoresRoute,
  getStatsMetricRoute,
  getStatsRoute,
  getTemplateNameRoute,
  getTemplateRoute,
  getValidateQueryRoute,
  headAliasNameRoute,
  headComponentTemplateNameRoute,
  headIndexAliasNameRoute,
  headIndexRoute,
  headIndexTemplateNameRoute,
  headTemplateNameRoute,
  postAliasesRoute,
  postAliasRolloverNewIndexRoute,
  postAliasRolloverRoute,
  postAnalyzeRoute,
  postCacheClearRoute,
  postComponentTemplateNameRoute,
  postDanglingIndexUuidRoute,
  postFlushRoute,
  postForcemergeRoute,
  postIndexAliasesNameRoute,
  postIndexAliasNameRoute,
  postIndexAnalyzeRoute,
  postIndexCacheClearRoute,
  postIndexCloneTargetRoute,
  postIndexCloseRoute,
  postIndexDiskUsageRoute,
  postIndexFlushRoute,
  postIndexForcemergeRoute,
  postIndexMappingRoute,
  postIndexOpenRoute,
  postIndexRefreshRoute,
  postIndexReloadSearchAnalyzersRoute,
  postIndexShrinkTargetRoute,
  postIndexSplitTargetRoute,
  postIndexTemplateNameRoute,
  postIndexTemplateSimulateIndexNameRoute,
  postIndexTemplateSimulateNameRoute,
  postIndexTemplateSimulateRoute,
  postIndexValidateQueryRoute,
  postRefreshRoute,
  postResolveIndexNameRoute,
  postTemplateNameRoute,
  postValidateQueryRoute,
  putComponentTemplateNameRoute,
  putIndexAliasesNameRoute,
  putIndexAliasNameRoute,
  putIndexBlockBlockRoute,
  putIndexCloneTargetRoute,
  putIndexMappingRoute,
  putIndexRoute,
  putIndexSettingsRoute,
  putIndexShrinkTargetRoute,
  putIndexSplitTargetRoute,
  putIndexTemplateNameRoute,
  putSettingsRoute,
  putTemplateNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indicesHandler = app
  .openapi(getComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headComponentTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getComponentTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDanglingIndexUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDanglingIndexUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDanglingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexBlockBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexBlockBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexAnalyzeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCacheClearRoute, (c) => {
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
  .openapi(deleteDataStreamNameLifecycleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headIndexTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexDiskUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFieldUsageStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postForcemergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexForcemergeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingFieldFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexMappingFieldFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMappingRoute, (c) => {
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
  .openapi(getSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsRoute, (c) => {
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
  .openapi(getSettingsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexRecoveryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRefreshRoute, (c) => {
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
  .openapi(getResolveClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResolveClusterNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResolveIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResolveIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasRolloverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasRolloverNewIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShardStoresRoute, (c) => {
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
  .openapi(postIndexTemplateSimulateIndexNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateSimulateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexTemplateSimulateNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIndexSplitTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexSplitTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexStatsMetricRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIndexValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
