import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAddLFTagsToResourceRoute,
  postAssumeDecoratedRoleWithSAMLRoute,
  postBatchGrantPermissionsRoute,
  postBatchRevokePermissionsRoute,
  postCancelTransactionRoute,
  postCommitTransactionRoute,
  postCreateDataCellsFilterRoute,
  postCreateLFTagRoute,
  postDeleteDataCellsFilterRoute,
  postDeleteLFTagRoute,
  postDeleteObjectsOnCancelRoute,
  postDeregisterResourceRoute,
  postDescribeResourceRoute,
  postDescribeTransactionRoute,
  postExtendTransactionRoute,
  postGetDataCellsFilterRoute,
  postGetDataLakeSettingsRoute,
  postGetEffectivePermissionsForPathRoute,
  postGetLFTagRoute,
  postGetQueryStateRoute,
  postGetQueryStatisticsRoute,
  postGetResourceLFTagsRoute,
  postGetTableObjectsRoute,
  postGetTemporaryGluePartitionCredentialsRoute,
  postGetTemporaryGlueTableCredentialsRoute,
  postGetWorkUnitResultsRoute,
  postGetWorkUnitsRoute,
  postGrantPermissionsRoute,
  postListDataCellsFilterRoute,
  postListLFTagsRoute,
  postListPermissionsRoute,
  postListResourcesRoute,
  postListTableStorageOptimizersRoute,
  postListTransactionsRoute,
  postPutDataLakeSettingsRoute,
  postRegisterResourceRoute,
  postRemoveLFTagsFromResourceRoute,
  postRevokePermissionsRoute,
  postSearchDatabasesByLFTagsRoute,
  postSearchTablesByLFTagsRoute,
  postStartQueryPlanningRoute,
  postStartTransactionRoute,
  postUpdateDataCellsFilterRoute,
  postUpdateLFTagRoute,
  postUpdateResourceRoute,
  postUpdateTableObjectsRoute,
  postUpdateTableStorageOptimizerRoute,
} from './routes'
import {
  postAddLFTagsToResourceRouteHandler,
  postAssumeDecoratedRoleWithSAMLRouteHandler,
  postBatchGrantPermissionsRouteHandler,
  postBatchRevokePermissionsRouteHandler,
  postCancelTransactionRouteHandler,
  postCommitTransactionRouteHandler,
  postCreateDataCellsFilterRouteHandler,
  postCreateLFTagRouteHandler,
  postDeleteDataCellsFilterRouteHandler,
  postDeleteLFTagRouteHandler,
  postDeleteObjectsOnCancelRouteHandler,
  postDeregisterResourceRouteHandler,
  postDescribeResourceRouteHandler,
  postDescribeTransactionRouteHandler,
  postExtendTransactionRouteHandler,
  postGetDataCellsFilterRouteHandler,
  postGetDataLakeSettingsRouteHandler,
  postGetEffectivePermissionsForPathRouteHandler,
  postGetLFTagRouteHandler,
  postGetQueryStateRouteHandler,
  postGetQueryStatisticsRouteHandler,
  postGetResourceLFTagsRouteHandler,
  postGetTableObjectsRouteHandler,
  postGetTemporaryGluePartitionCredentialsRouteHandler,
  postGetTemporaryGlueTableCredentialsRouteHandler,
  postGetWorkUnitResultsRouteHandler,
  postGetWorkUnitsRouteHandler,
  postGrantPermissionsRouteHandler,
  postListDataCellsFilterRouteHandler,
  postListLFTagsRouteHandler,
  postListPermissionsRouteHandler,
  postListResourcesRouteHandler,
  postListTableStorageOptimizersRouteHandler,
  postListTransactionsRouteHandler,
  postPutDataLakeSettingsRouteHandler,
  postRegisterResourceRouteHandler,
  postRemoveLFTagsFromResourceRouteHandler,
  postRevokePermissionsRouteHandler,
  postSearchDatabasesByLFTagsRouteHandler,
  postSearchTablesByLFTagsRouteHandler,
  postStartQueryPlanningRouteHandler,
  postStartTransactionRouteHandler,
  postUpdateDataCellsFilterRouteHandler,
  postUpdateLFTagRouteHandler,
  postUpdateResourceRouteHandler,
  postUpdateTableObjectsRouteHandler,
  postUpdateTableStorageOptimizerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAddLFTagsToResourceRoute, postAddLFTagsToResourceRouteHandler)
  .openapi(postAssumeDecoratedRoleWithSAMLRoute, postAssumeDecoratedRoleWithSAMLRouteHandler)
  .openapi(postBatchGrantPermissionsRoute, postBatchGrantPermissionsRouteHandler)
  .openapi(postBatchRevokePermissionsRoute, postBatchRevokePermissionsRouteHandler)
  .openapi(postCancelTransactionRoute, postCancelTransactionRouteHandler)
  .openapi(postCommitTransactionRoute, postCommitTransactionRouteHandler)
  .openapi(postCreateDataCellsFilterRoute, postCreateDataCellsFilterRouteHandler)
  .openapi(postCreateLFTagRoute, postCreateLFTagRouteHandler)
  .openapi(postDeleteDataCellsFilterRoute, postDeleteDataCellsFilterRouteHandler)
  .openapi(postDeleteLFTagRoute, postDeleteLFTagRouteHandler)
  .openapi(postDeleteObjectsOnCancelRoute, postDeleteObjectsOnCancelRouteHandler)
  .openapi(postDeregisterResourceRoute, postDeregisterResourceRouteHandler)
  .openapi(postDescribeResourceRoute, postDescribeResourceRouteHandler)
  .openapi(postDescribeTransactionRoute, postDescribeTransactionRouteHandler)
  .openapi(postExtendTransactionRoute, postExtendTransactionRouteHandler)
  .openapi(postGetDataCellsFilterRoute, postGetDataCellsFilterRouteHandler)
  .openapi(postGetDataLakeSettingsRoute, postGetDataLakeSettingsRouteHandler)
  .openapi(postGetEffectivePermissionsForPathRoute, postGetEffectivePermissionsForPathRouteHandler)
  .openapi(postGetLFTagRoute, postGetLFTagRouteHandler)
  .openapi(postGetQueryStateRoute, postGetQueryStateRouteHandler)
  .openapi(postGetQueryStatisticsRoute, postGetQueryStatisticsRouteHandler)
  .openapi(postGetResourceLFTagsRoute, postGetResourceLFTagsRouteHandler)
  .openapi(postGetTableObjectsRoute, postGetTableObjectsRouteHandler)
  .openapi(
    postGetTemporaryGluePartitionCredentialsRoute,
    postGetTemporaryGluePartitionCredentialsRouteHandler,
  )
  .openapi(
    postGetTemporaryGlueTableCredentialsRoute,
    postGetTemporaryGlueTableCredentialsRouteHandler,
  )
  .openapi(postGetWorkUnitResultsRoute, postGetWorkUnitResultsRouteHandler)
  .openapi(postGetWorkUnitsRoute, postGetWorkUnitsRouteHandler)
  .openapi(postGrantPermissionsRoute, postGrantPermissionsRouteHandler)
  .openapi(postListDataCellsFilterRoute, postListDataCellsFilterRouteHandler)
  .openapi(postListLFTagsRoute, postListLFTagsRouteHandler)
  .openapi(postListPermissionsRoute, postListPermissionsRouteHandler)
  .openapi(postListResourcesRoute, postListResourcesRouteHandler)
  .openapi(postListTableStorageOptimizersRoute, postListTableStorageOptimizersRouteHandler)
  .openapi(postListTransactionsRoute, postListTransactionsRouteHandler)
  .openapi(postPutDataLakeSettingsRoute, postPutDataLakeSettingsRouteHandler)
  .openapi(postRegisterResourceRoute, postRegisterResourceRouteHandler)
  .openapi(postRemoveLFTagsFromResourceRoute, postRemoveLFTagsFromResourceRouteHandler)
  .openapi(postRevokePermissionsRoute, postRevokePermissionsRouteHandler)
  .openapi(postSearchDatabasesByLFTagsRoute, postSearchDatabasesByLFTagsRouteHandler)
  .openapi(postSearchTablesByLFTagsRoute, postSearchTablesByLFTagsRouteHandler)
  .openapi(postStartQueryPlanningRoute, postStartQueryPlanningRouteHandler)
  .openapi(postStartTransactionRoute, postStartTransactionRouteHandler)
  .openapi(postUpdateDataCellsFilterRoute, postUpdateDataCellsFilterRouteHandler)
  .openapi(postUpdateLFTagRoute, postUpdateLFTagRouteHandler)
  .openapi(postUpdateResourceRoute, postUpdateResourceRouteHandler)
  .openapi(postUpdateTableObjectsRoute, postUpdateTableObjectsRouteHandler)
  .openapi(postUpdateTableStorageOptimizerRoute, postUpdateTableStorageOptimizerRouteHandler)

export default app
