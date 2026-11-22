import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
  deleteAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute,
  getAdminConfigurationManagementConfigurationDriftsConfigurationDriftIdRoute,
  getAdminConfigurationManagementConfigurationDriftsCountRoute,
  getAdminConfigurationManagementConfigurationDriftsRoute,
  getAdminConfigurationManagementConfigurationMonitoringResultsConfigurationMonitoringResultIdRoute,
  getAdminConfigurationManagementConfigurationMonitoringResultsCountRoute,
  getAdminConfigurationManagementConfigurationMonitoringResultsRoute,
  getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdBaselineRoute,
  getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
  getAdminConfigurationManagementConfigurationMonitorsCountRoute,
  getAdminConfigurationManagementConfigurationMonitorsRoute,
  getAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute,
  getAdminConfigurationManagementConfigurationSnapshotJobsRoute,
  getAdminConfigurationManagementConfigurationSnapshotsConfigurationBaselineIdRoute,
  getAdminConfigurationManagementConfigurationSnapshotsRoute,
  patchAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
  postAdminConfigurationManagementConfigurationMonitorsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminConfigurationManagementHandler = app
  .openapi(getAdminConfigurationManagementConfigurationDriftsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigurationManagementConfigurationDriftsConfigurationDriftIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigurationManagementConfigurationDriftsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigurationManagementConfigurationMonitoringResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminConfigurationManagementConfigurationMonitoringResultsConfigurationMonitoringResultIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminConfigurationManagementConfigurationMonitoringResultsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigurationManagementConfigurationMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminConfigurationManagementConfigurationMonitorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getAdminConfigurationManagementConfigurationMonitorsConfigurationMonitorIdBaselineRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminConfigurationManagementConfigurationMonitorsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminConfigurationManagementConfigurationSnapshotJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteAdminConfigurationManagementConfigurationSnapshotJobsConfigurationSnapshotJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getAdminConfigurationManagementConfigurationSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminConfigurationManagementConfigurationSnapshotsConfigurationBaselineIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
