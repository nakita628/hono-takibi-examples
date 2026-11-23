import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAmazonAthenaBatchGetNamedQueryHandler,
  xAmzTargetAmazonAthenaBatchGetPreparedStatementHandler,
  xAmzTargetAmazonAthenaBatchGetQueryExecutionHandler,
  xAmzTargetAmazonAthenaCancelCapacityReservationHandler,
  xAmzTargetAmazonAthenaCreateCapacityReservationHandler,
  xAmzTargetAmazonAthenaCreateDataCatalogHandler,
  xAmzTargetAmazonAthenaCreateNamedQueryHandler,
  xAmzTargetAmazonAthenaCreateNotebookHandler,
  xAmzTargetAmazonAthenaCreatePreparedStatementHandler,
  xAmzTargetAmazonAthenaCreatePresignedNotebookUrlHandler,
  xAmzTargetAmazonAthenaCreateWorkGroupHandler,
  xAmzTargetAmazonAthenaDeleteCapacityReservationHandler,
  xAmzTargetAmazonAthenaDeleteDataCatalogHandler,
  xAmzTargetAmazonAthenaDeleteNamedQueryHandler,
  xAmzTargetAmazonAthenaDeleteNotebookHandler,
  xAmzTargetAmazonAthenaDeletePreparedStatementHandler,
  xAmzTargetAmazonAthenaDeleteWorkGroupHandler,
  xAmzTargetAmazonAthenaExportNotebookHandler,
  xAmzTargetAmazonAthenaGetCalculationExecutionCodeHandler,
  xAmzTargetAmazonAthenaGetCalculationExecutionHandler,
  xAmzTargetAmazonAthenaGetCalculationExecutionStatusHandler,
  xAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationHandler,
  xAmzTargetAmazonAthenaGetCapacityReservationHandler,
  xAmzTargetAmazonAthenaGetDatabaseHandler,
  xAmzTargetAmazonAthenaGetDataCatalogHandler,
  xAmzTargetAmazonAthenaGetNamedQueryHandler,
  xAmzTargetAmazonAthenaGetNotebookMetadataHandler,
  xAmzTargetAmazonAthenaGetPreparedStatementHandler,
  xAmzTargetAmazonAthenaGetQueryExecutionHandler,
  xAmzTargetAmazonAthenaGetQueryResultsHandler,
  xAmzTargetAmazonAthenaGetQueryRuntimeStatisticsHandler,
  xAmzTargetAmazonAthenaGetSessionHandler,
  xAmzTargetAmazonAthenaGetSessionStatusHandler,
  xAmzTargetAmazonAthenaGetTableMetadataHandler,
  xAmzTargetAmazonAthenaGetWorkGroupHandler,
  xAmzTargetAmazonAthenaImportNotebookHandler,
  xAmzTargetAmazonAthenaListApplicationDpuSizesHandler,
  xAmzTargetAmazonAthenaListCalculationExecutionsHandler,
  xAmzTargetAmazonAthenaListCapacityReservationsHandler,
  xAmzTargetAmazonAthenaListDatabasesHandler,
  xAmzTargetAmazonAthenaListDataCatalogsHandler,
  xAmzTargetAmazonAthenaListEngineVersionsHandler,
  xAmzTargetAmazonAthenaListExecutorsHandler,
  xAmzTargetAmazonAthenaListNamedQueriesHandler,
  xAmzTargetAmazonAthenaListNotebookMetadataHandler,
  xAmzTargetAmazonAthenaListNotebookSessionsHandler,
  xAmzTargetAmazonAthenaListPreparedStatementsHandler,
  xAmzTargetAmazonAthenaListQueryExecutionsHandler,
  xAmzTargetAmazonAthenaListSessionsHandler,
  xAmzTargetAmazonAthenaListTableMetadataHandler,
  xAmzTargetAmazonAthenaListTagsForResourceHandler,
  xAmzTargetAmazonAthenaListWorkGroupsHandler,
  xAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationHandler,
  xAmzTargetAmazonAthenaStartCalculationExecutionHandler,
  xAmzTargetAmazonAthenaStartQueryExecutionHandler,
  xAmzTargetAmazonAthenaStartSessionHandler,
  xAmzTargetAmazonAthenaStopCalculationExecutionHandler,
  xAmzTargetAmazonAthenaStopQueryExecutionHandler,
  xAmzTargetAmazonAthenaTagResourceHandler,
  xAmzTargetAmazonAthenaTerminateSessionHandler,
  xAmzTargetAmazonAthenaUntagResourceHandler,
  xAmzTargetAmazonAthenaUpdateCapacityReservationHandler,
  xAmzTargetAmazonAthenaUpdateDataCatalogHandler,
  xAmzTargetAmazonAthenaUpdateNamedQueryHandler,
  xAmzTargetAmazonAthenaUpdateNotebookHandler,
  xAmzTargetAmazonAthenaUpdateNotebookMetadataHandler,
  xAmzTargetAmazonAthenaUpdatePreparedStatementHandler,
  xAmzTargetAmazonAthenaUpdateWorkGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAmazonAthenaBatchGetNamedQueryHandler)
  .route('/', xAmzTargetAmazonAthenaBatchGetPreparedStatementHandler)
  .route('/', xAmzTargetAmazonAthenaBatchGetQueryExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaCancelCapacityReservationHandler)
  .route('/', xAmzTargetAmazonAthenaCreateCapacityReservationHandler)
  .route('/', xAmzTargetAmazonAthenaCreateDataCatalogHandler)
  .route('/', xAmzTargetAmazonAthenaCreateNamedQueryHandler)
  .route('/', xAmzTargetAmazonAthenaCreateNotebookHandler)
  .route('/', xAmzTargetAmazonAthenaCreatePreparedStatementHandler)
  .route('/', xAmzTargetAmazonAthenaCreatePresignedNotebookUrlHandler)
  .route('/', xAmzTargetAmazonAthenaCreateWorkGroupHandler)
  .route('/', xAmzTargetAmazonAthenaDeleteCapacityReservationHandler)
  .route('/', xAmzTargetAmazonAthenaDeleteDataCatalogHandler)
  .route('/', xAmzTargetAmazonAthenaDeleteNamedQueryHandler)
  .route('/', xAmzTargetAmazonAthenaDeleteNotebookHandler)
  .route('/', xAmzTargetAmazonAthenaDeletePreparedStatementHandler)
  .route('/', xAmzTargetAmazonAthenaDeleteWorkGroupHandler)
  .route('/', xAmzTargetAmazonAthenaExportNotebookHandler)
  .route('/', xAmzTargetAmazonAthenaGetCalculationExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaGetCalculationExecutionCodeHandler)
  .route('/', xAmzTargetAmazonAthenaGetCalculationExecutionStatusHandler)
  .route('/', xAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationHandler)
  .route('/', xAmzTargetAmazonAthenaGetCapacityReservationHandler)
  .route('/', xAmzTargetAmazonAthenaGetDataCatalogHandler)
  .route('/', xAmzTargetAmazonAthenaGetDatabaseHandler)
  .route('/', xAmzTargetAmazonAthenaGetNamedQueryHandler)
  .route('/', xAmzTargetAmazonAthenaGetNotebookMetadataHandler)
  .route('/', xAmzTargetAmazonAthenaGetPreparedStatementHandler)
  .route('/', xAmzTargetAmazonAthenaGetQueryExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaGetQueryResultsHandler)
  .route('/', xAmzTargetAmazonAthenaGetQueryRuntimeStatisticsHandler)
  .route('/', xAmzTargetAmazonAthenaGetSessionHandler)
  .route('/', xAmzTargetAmazonAthenaGetSessionStatusHandler)
  .route('/', xAmzTargetAmazonAthenaGetTableMetadataHandler)
  .route('/', xAmzTargetAmazonAthenaGetWorkGroupHandler)
  .route('/', xAmzTargetAmazonAthenaImportNotebookHandler)
  .route('/', xAmzTargetAmazonAthenaListApplicationDpuSizesHandler)
  .route('/', xAmzTargetAmazonAthenaListCalculationExecutionsHandler)
  .route('/', xAmzTargetAmazonAthenaListCapacityReservationsHandler)
  .route('/', xAmzTargetAmazonAthenaListDataCatalogsHandler)
  .route('/', xAmzTargetAmazonAthenaListDatabasesHandler)
  .route('/', xAmzTargetAmazonAthenaListEngineVersionsHandler)
  .route('/', xAmzTargetAmazonAthenaListExecutorsHandler)
  .route('/', xAmzTargetAmazonAthenaListNamedQueriesHandler)
  .route('/', xAmzTargetAmazonAthenaListNotebookMetadataHandler)
  .route('/', xAmzTargetAmazonAthenaListNotebookSessionsHandler)
  .route('/', xAmzTargetAmazonAthenaListPreparedStatementsHandler)
  .route('/', xAmzTargetAmazonAthenaListQueryExecutionsHandler)
  .route('/', xAmzTargetAmazonAthenaListSessionsHandler)
  .route('/', xAmzTargetAmazonAthenaListTableMetadataHandler)
  .route('/', xAmzTargetAmazonAthenaListTagsForResourceHandler)
  .route('/', xAmzTargetAmazonAthenaListWorkGroupsHandler)
  .route('/', xAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationHandler)
  .route('/', xAmzTargetAmazonAthenaStartCalculationExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaStartQueryExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaStartSessionHandler)
  .route('/', xAmzTargetAmazonAthenaStopCalculationExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaStopQueryExecutionHandler)
  .route('/', xAmzTargetAmazonAthenaTagResourceHandler)
  .route('/', xAmzTargetAmazonAthenaTerminateSessionHandler)
  .route('/', xAmzTargetAmazonAthenaUntagResourceHandler)
  .route('/', xAmzTargetAmazonAthenaUpdateCapacityReservationHandler)
  .route('/', xAmzTargetAmazonAthenaUpdateDataCatalogHandler)
  .route('/', xAmzTargetAmazonAthenaUpdateNamedQueryHandler)
  .route('/', xAmzTargetAmazonAthenaUpdateNotebookHandler)
  .route('/', xAmzTargetAmazonAthenaUpdateNotebookMetadataHandler)
  .route('/', xAmzTargetAmazonAthenaUpdatePreparedStatementHandler)
  .route('/', xAmzTargetAmazonAthenaUpdateWorkGroupHandler)

export default app
