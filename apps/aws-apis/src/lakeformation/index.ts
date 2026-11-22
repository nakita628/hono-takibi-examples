import { OpenAPIHono } from '@hono/zod-openapi'
import {
  AddLFTagsToResourceHandler,
  AssumeDecoratedRoleWithSAMLHandler,
  BatchGrantPermissionsHandler,
  BatchRevokePermissionsHandler,
  CancelTransactionHandler,
  CommitTransactionHandler,
  CreateDataCellsFilterHandler,
  CreateLFTagHandler,
  DeleteDataCellsFilterHandler,
  DeleteLFTagHandler,
  DeleteObjectsOnCancelHandler,
  DeregisterResourceHandler,
  DescribeResourceHandler,
  DescribeTransactionHandler,
  ExtendTransactionHandler,
  GetDataCellsFilterHandler,
  GetDataLakeSettingsHandler,
  GetEffectivePermissionsForPathHandler,
  GetLFTagHandler,
  GetQueryStateHandler,
  GetQueryStatisticsHandler,
  GetResourceLFTagsHandler,
  GetTableObjectsHandler,
  GetTemporaryGluePartitionCredentialsHandler,
  GetTemporaryGlueTableCredentialsHandler,
  GetWorkUnitResultsHandler,
  GetWorkUnitsHandler,
  GrantPermissionsHandler,
  ListDataCellsFilterHandler,
  ListLFTagsHandler,
  ListPermissionsHandler,
  ListResourcesHandler,
  ListTableStorageOptimizersHandler,
  ListTransactionsHandler,
  PutDataLakeSettingsHandler,
  RegisterResourceHandler,
  RemoveLFTagsFromResourceHandler,
  RevokePermissionsHandler,
  SearchDatabasesByLFTagsHandler,
  SearchTablesByLFTagsHandler,
  StartQueryPlanningHandler,
  StartTransactionHandler,
  UpdateDataCellsFilterHandler,
  UpdateLFTagHandler,
  UpdateResourceHandler,
  UpdateTableObjectsHandler,
  UpdateTableStorageOptimizerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', AddLFTagsToResourceHandler)
  .route('/', AssumeDecoratedRoleWithSAMLHandler)
  .route('/', BatchGrantPermissionsHandler)
  .route('/', BatchRevokePermissionsHandler)
  .route('/', CancelTransactionHandler)
  .route('/', CommitTransactionHandler)
  .route('/', CreateDataCellsFilterHandler)
  .route('/', CreateLFTagHandler)
  .route('/', DeleteDataCellsFilterHandler)
  .route('/', DeleteLFTagHandler)
  .route('/', DeleteObjectsOnCancelHandler)
  .route('/', DeregisterResourceHandler)
  .route('/', DescribeResourceHandler)
  .route('/', DescribeTransactionHandler)
  .route('/', ExtendTransactionHandler)
  .route('/', GetDataCellsFilterHandler)
  .route('/', GetDataLakeSettingsHandler)
  .route('/', GetEffectivePermissionsForPathHandler)
  .route('/', GetLFTagHandler)
  .route('/', GetQueryStateHandler)
  .route('/', GetQueryStatisticsHandler)
  .route('/', GetResourceLFTagsHandler)
  .route('/', GetTableObjectsHandler)
  .route('/', GetTemporaryGluePartitionCredentialsHandler)
  .route('/', GetTemporaryGlueTableCredentialsHandler)
  .route('/', GetWorkUnitResultsHandler)
  .route('/', GetWorkUnitsHandler)
  .route('/', GrantPermissionsHandler)
  .route('/', ListDataCellsFilterHandler)
  .route('/', ListLFTagsHandler)
  .route('/', ListPermissionsHandler)
  .route('/', ListResourcesHandler)
  .route('/', ListTableStorageOptimizersHandler)
  .route('/', ListTransactionsHandler)
  .route('/', PutDataLakeSettingsHandler)
  .route('/', RegisterResourceHandler)
  .route('/', RemoveLFTagsFromResourceHandler)
  .route('/', RevokePermissionsHandler)
  .route('/', SearchDatabasesByLFTagsHandler)
  .route('/', SearchTablesByLFTagsHandler)
  .route('/', StartQueryPlanningHandler)
  .route('/', StartTransactionHandler)
  .route('/', UpdateDataCellsFilterHandler)
  .route('/', UpdateLFTagHandler)
  .route('/', UpdateResourceHandler)
  .route('/', UpdateTableObjectsHandler)
  .route('/', UpdateTableStorageOptimizerHandler)

export default app
