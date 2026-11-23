import { OpenAPIHono } from '@hono/zod-openapi'
import {
  actionAddSourceIdentifierToSubscriptionHandler,
  actionAddTagsToResourceHandler,
  actionApplyPendingMaintenanceActionHandler,
  actionCopyDbClusterParameterGroupHandler,
  actionCopyDbClusterSnapshotHandler,
  actionCreateDbClusterHandler,
  actionCreateDbClusterParameterGroupHandler,
  actionCreateDbClusterSnapshotHandler,
  actionCreateDbInstanceHandler,
  actionCreateDbSubnetGroupHandler,
  actionCreateEventSubscriptionHandler,
  actionCreateGlobalClusterHandler,
  actionDeleteDbClusterHandler,
  actionDeleteDbClusterParameterGroupHandler,
  actionDeleteDbClusterSnapshotHandler,
  actionDeleteDbInstanceHandler,
  actionDeleteDbSubnetGroupHandler,
  actionDeleteEventSubscriptionHandler,
  actionDeleteGlobalClusterHandler,
  actionDescribeCertificatesHandler,
  actionDescribeDbClusterParameterGroupsHandler,
  actionDescribeDbClusterParametersHandler,
  actionDescribeDbClustersHandler,
  actionDescribeDbClusterSnapshotAttributesHandler,
  actionDescribeDbClusterSnapshotsHandler,
  actionDescribeDbEngineVersionsHandler,
  actionDescribeDbInstancesHandler,
  actionDescribeDbSubnetGroupsHandler,
  actionDescribeEngineDefaultClusterParametersHandler,
  actionDescribeEventCategoriesHandler,
  actionDescribeEventsHandler,
  actionDescribeEventSubscriptionsHandler,
  actionDescribeGlobalClustersHandler,
  actionDescribeOrderableDbInstanceOptionsHandler,
  actionDescribePendingMaintenanceActionsHandler,
  actionFailoverDbClusterHandler,
  actionListTagsForResourceHandler,
  actionModifyDbClusterHandler,
  actionModifyDbClusterParameterGroupHandler,
  actionModifyDbClusterSnapshotAttributeHandler,
  actionModifyDbInstanceHandler,
  actionModifyDbSubnetGroupHandler,
  actionModifyEventSubscriptionHandler,
  actionModifyGlobalClusterHandler,
  actionRebootDbInstanceHandler,
  actionRemoveFromGlobalClusterHandler,
  actionRemoveSourceIdentifierFromSubscriptionHandler,
  actionRemoveTagsFromResourceHandler,
  actionResetDbClusterParameterGroupHandler,
  actionRestoreDbClusterFromSnapshotHandler,
  actionRestoreDbClusterToPointInTimeHandler,
  actionStartDbClusterHandler,
  actionStopDbClusterHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', actionAddSourceIdentifierToSubscriptionHandler)
  .route('/', actionAddTagsToResourceHandler)
  .route('/', actionApplyPendingMaintenanceActionHandler)
  .route('/', actionCopyDbClusterParameterGroupHandler)
  .route('/', actionCopyDbClusterSnapshotHandler)
  .route('/', actionCreateDbClusterHandler)
  .route('/', actionCreateDbClusterParameterGroupHandler)
  .route('/', actionCreateDbClusterSnapshotHandler)
  .route('/', actionCreateDbInstanceHandler)
  .route('/', actionCreateDbSubnetGroupHandler)
  .route('/', actionCreateEventSubscriptionHandler)
  .route('/', actionCreateGlobalClusterHandler)
  .route('/', actionDeleteDbClusterHandler)
  .route('/', actionDeleteDbClusterParameterGroupHandler)
  .route('/', actionDeleteDbClusterSnapshotHandler)
  .route('/', actionDeleteDbInstanceHandler)
  .route('/', actionDeleteDbSubnetGroupHandler)
  .route('/', actionDeleteEventSubscriptionHandler)
  .route('/', actionDeleteGlobalClusterHandler)
  .route('/', actionDescribeCertificatesHandler)
  .route('/', actionDescribeDbClusterParameterGroupsHandler)
  .route('/', actionDescribeDbClusterParametersHandler)
  .route('/', actionDescribeDbClusterSnapshotAttributesHandler)
  .route('/', actionDescribeDbClusterSnapshotsHandler)
  .route('/', actionDescribeDbClustersHandler)
  .route('/', actionDescribeDbEngineVersionsHandler)
  .route('/', actionDescribeDbInstancesHandler)
  .route('/', actionDescribeDbSubnetGroupsHandler)
  .route('/', actionDescribeEngineDefaultClusterParametersHandler)
  .route('/', actionDescribeEventCategoriesHandler)
  .route('/', actionDescribeEventSubscriptionsHandler)
  .route('/', actionDescribeEventsHandler)
  .route('/', actionDescribeGlobalClustersHandler)
  .route('/', actionDescribeOrderableDbInstanceOptionsHandler)
  .route('/', actionDescribePendingMaintenanceActionsHandler)
  .route('/', actionFailoverDbClusterHandler)
  .route('/', actionListTagsForResourceHandler)
  .route('/', actionModifyDbClusterHandler)
  .route('/', actionModifyDbClusterParameterGroupHandler)
  .route('/', actionModifyDbClusterSnapshotAttributeHandler)
  .route('/', actionModifyDbInstanceHandler)
  .route('/', actionModifyDbSubnetGroupHandler)
  .route('/', actionModifyEventSubscriptionHandler)
  .route('/', actionModifyGlobalClusterHandler)
  .route('/', actionRebootDbInstanceHandler)
  .route('/', actionRemoveFromGlobalClusterHandler)
  .route('/', actionRemoveSourceIdentifierFromSubscriptionHandler)
  .route('/', actionRemoveTagsFromResourceHandler)
  .route('/', actionResetDbClusterParameterGroupHandler)
  .route('/', actionRestoreDbClusterFromSnapshotHandler)
  .route('/', actionRestoreDbClusterToPointInTimeHandler)
  .route('/', actionStartDbClusterHandler)
  .route('/', actionStopDbClusterHandler)

export default app
