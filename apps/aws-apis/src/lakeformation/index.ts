import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addLfTagsToResourceHandler,
  assumeDecoratedRoleWithSamlHandler,
  batchGrantPermissionsHandler,
  batchRevokePermissionsHandler,
  cancelTransactionHandler,
  commitTransactionHandler,
  createDataCellsFilterHandler,
  createLfTagHandler,
  deleteDataCellsFilterHandler,
  deleteLfTagHandler,
  deleteObjectsOnCancelHandler,
  deregisterResourceHandler,
  describeResourceHandler,
  describeTransactionHandler,
  extendTransactionHandler,
  getDataCellsFilterHandler,
  getDataLakeSettingsHandler,
  getEffectivePermissionsForPathHandler,
  getLfTagHandler,
  getQueryStateHandler,
  getQueryStatisticsHandler,
  getResourceLfTagsHandler,
  getTableObjectsHandler,
  getTemporaryGluePartitionCredentialsHandler,
  getTemporaryGlueTableCredentialsHandler,
  getWorkUnitResultsHandler,
  getWorkUnitsHandler,
  grantPermissionsHandler,
  listDataCellsFilterHandler,
  listLfTagsHandler,
  listPermissionsHandler,
  listResourcesHandler,
  listTableStorageOptimizersHandler,
  listTransactionsHandler,
  putDataLakeSettingsHandler,
  registerResourceHandler,
  removeLfTagsFromResourceHandler,
  revokePermissionsHandler,
  searchDatabasesByLfTagsHandler,
  searchTablesByLfTagsHandler,
  startQueryPlanningHandler,
  startTransactionHandler,
  updateDataCellsFilterHandler,
  updateLfTagHandler,
  updateResourceHandler,
  updateTableObjectsHandler,
  updateTableStorageOptimizerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addLfTagsToResourceHandler)
  .route('/', assumeDecoratedRoleWithSamlHandler)
  .route('/', batchGrantPermissionsHandler)
  .route('/', batchRevokePermissionsHandler)
  .route('/', cancelTransactionHandler)
  .route('/', commitTransactionHandler)
  .route('/', createDataCellsFilterHandler)
  .route('/', createLfTagHandler)
  .route('/', deleteDataCellsFilterHandler)
  .route('/', deleteLfTagHandler)
  .route('/', deleteObjectsOnCancelHandler)
  .route('/', deregisterResourceHandler)
  .route('/', describeResourceHandler)
  .route('/', describeTransactionHandler)
  .route('/', extendTransactionHandler)
  .route('/', getDataCellsFilterHandler)
  .route('/', getDataLakeSettingsHandler)
  .route('/', getEffectivePermissionsForPathHandler)
  .route('/', getLfTagHandler)
  .route('/', getQueryStateHandler)
  .route('/', getQueryStatisticsHandler)
  .route('/', getResourceLfTagsHandler)
  .route('/', getTableObjectsHandler)
  .route('/', getTemporaryGluePartitionCredentialsHandler)
  .route('/', getTemporaryGlueTableCredentialsHandler)
  .route('/', getWorkUnitResultsHandler)
  .route('/', getWorkUnitsHandler)
  .route('/', grantPermissionsHandler)
  .route('/', listDataCellsFilterHandler)
  .route('/', listLfTagsHandler)
  .route('/', listPermissionsHandler)
  .route('/', listResourcesHandler)
  .route('/', listTableStorageOptimizersHandler)
  .route('/', listTransactionsHandler)
  .route('/', putDataLakeSettingsHandler)
  .route('/', registerResourceHandler)
  .route('/', removeLfTagsFromResourceHandler)
  .route('/', revokePermissionsHandler)
  .route('/', searchDatabasesByLfTagsHandler)
  .route('/', searchTablesByLfTagsHandler)
  .route('/', startQueryPlanningHandler)
  .route('/', startTransactionHandler)
  .route('/', updateDataCellsFilterHandler)
  .route('/', updateLfTagHandler)
  .route('/', updateResourceHandler)
  .route('/', updateTableObjectsHandler)
  .route('/', updateTableStorageOptimizerHandler)

export default app
