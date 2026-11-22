import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsEndpointIdRoute,
  deleteApiAtlasV2GroupsGroupIdBackupCompliancePolicyRoute,
  deleteApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketIdRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRestoreJobIdRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupScheduleRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusterSnapshotIdRoute,
  deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdRoute,
  getApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsEndpointIdRoute,
  getApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsRoute,
  getApiAtlasV2GroupsGroupIdBackupCompliancePolicyRoute,
  getApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketIdRoute,
  getApiAtlasV2GroupsGroupIdBackupExportBucketsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsExportIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRestoreJobIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupScheduleRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusterSnapshotIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClustersRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameCollectionsCollectionNameRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameCollectionsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdCollectionsRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdCollectionsSourceNamespaceRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdRoute,
  getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsRoute,
  patchApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketIdRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameBackupScheduleRoute,
  patchApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdRoute,
  postApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsRoute,
  postApiAtlasV2GroupsGroupIdBackupExportBucketsRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsRoute,
  postApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsRoute,
  putApiAtlasV2GroupsGroupIdBackupCompliancePolicyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudBackupsHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdBackupCloudProviderPrivateEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdBackupExportBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdBackupExportBucketsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdBackupExportBucketsExportBucketIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdBackupCompliancePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdBackupCompliancePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAtlasV2GroupsGroupIdBackupCompliancePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupExportsExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRestoreJobIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupRestoreJobsRestoreJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameBackupScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameCollectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsSnapshotIdDatabasesDatabaseNameCollectionsCollectionNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusterSnapshotIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClusterSnapshotIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameBackupSnapshotsShardedClustersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdCollectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiAtlasV2GroupsGroupIdClustersClusterNameCollectionRestoreJobsJobIdCollectionsSourceNamespaceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
