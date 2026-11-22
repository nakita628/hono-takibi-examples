import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdManagedSlowMsDisableRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorDropIndexSuggestionsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorSchemaAdviceRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorSuggestedIndexesRoute,
  getApiAtlasV2GroupsGroupIdManagedSlowMsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorNamespacesRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorSlowQueryLogsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorSuggestedIndexesRoute,
  getApiAtlasV2GroupsGroupIdServerlessClusterNamePerformanceAdvisorAutoIndexingRoute,
  postApiAtlasV2GroupsGroupIdManagedSlowMsEnableRoute,
  postApiAtlasV2GroupsGroupIdServerlessClusterNamePerformanceAdvisorAutoIndexingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const performanceAdvisorHandler = app
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorDropIndexSuggestionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorSchemaAdviceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNamePerformanceAdvisorSuggestedIndexesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdManagedSlowMsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdManagedSlowMsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdManagedSlowMsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorSlowQueryLogsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdProcessesProcessIdPerformanceAdvisorSuggestedIndexesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdServerlessClusterNamePerformanceAdvisorAutoIndexingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiAtlasV2GroupsGroupIdServerlessClusterNamePerformanceAdvisorAutoIndexingRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
