import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdClustersHostNameLogsLogNameGzRoute,
  getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsIndexesDatabaseNameCollectionNameIndexNameMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsIndexesDatabaseNameCollectionNameMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesDatabaseNameMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesDatabaseNameRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksPartitionNameMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksPartitionNameRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdMeasurementsRoute,
  getApiAtlasV2GroupsGroupIdProcessesProcessIdRoute,
  getApiAtlasV2GroupsGroupIdProcessesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const monitoringAndLogsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdClustersHostNameLogsLogNameGzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsIndexesDatabaseNameCollectionNameIndexNameMeasurementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsIndexesDatabaseNameCollectionNameMeasurementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdHostsProcessIdFtsMetricsMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdProcessesProcessIdDatabasesDatabaseNameMeasurementsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksPartitionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdDisksPartitionNameMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdProcessesProcessIdMeasurementsRoute, (c) => {
    throw new Error('Not implemented')
  })
