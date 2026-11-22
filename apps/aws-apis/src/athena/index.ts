import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAmazonAthenaBatchGetNamedQueryHandler,
  XAmzTargetAmazonAthenaBatchGetPreparedStatementHandler,
  XAmzTargetAmazonAthenaBatchGetQueryExecutionHandler,
  XAmzTargetAmazonAthenaCancelCapacityReservationHandler,
  XAmzTargetAmazonAthenaCreateCapacityReservationHandler,
  XAmzTargetAmazonAthenaCreateDataCatalogHandler,
  XAmzTargetAmazonAthenaCreateNamedQueryHandler,
  XAmzTargetAmazonAthenaCreateNotebookHandler,
  XAmzTargetAmazonAthenaCreatePreparedStatementHandler,
  XAmzTargetAmazonAthenaCreatePresignedNotebookUrlHandler,
  XAmzTargetAmazonAthenaCreateWorkGroupHandler,
  XAmzTargetAmazonAthenaDeleteCapacityReservationHandler,
  XAmzTargetAmazonAthenaDeleteDataCatalogHandler,
  XAmzTargetAmazonAthenaDeleteNamedQueryHandler,
  XAmzTargetAmazonAthenaDeleteNotebookHandler,
  XAmzTargetAmazonAthenaDeletePreparedStatementHandler,
  XAmzTargetAmazonAthenaDeleteWorkGroupHandler,
  XAmzTargetAmazonAthenaExportNotebookHandler,
  XAmzTargetAmazonAthenaGetCalculationExecutionCodeHandler,
  XAmzTargetAmazonAthenaGetCalculationExecutionHandler,
  XAmzTargetAmazonAthenaGetCalculationExecutionStatusHandler,
  XAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationHandler,
  XAmzTargetAmazonAthenaGetCapacityReservationHandler,
  XAmzTargetAmazonAthenaGetDatabaseHandler,
  XAmzTargetAmazonAthenaGetDataCatalogHandler,
  XAmzTargetAmazonAthenaGetNamedQueryHandler,
  XAmzTargetAmazonAthenaGetNotebookMetadataHandler,
  XAmzTargetAmazonAthenaGetPreparedStatementHandler,
  XAmzTargetAmazonAthenaGetQueryExecutionHandler,
  XAmzTargetAmazonAthenaGetQueryResultsHandler,
  XAmzTargetAmazonAthenaGetQueryRuntimeStatisticsHandler,
  XAmzTargetAmazonAthenaGetSessionHandler,
  XAmzTargetAmazonAthenaGetSessionStatusHandler,
  XAmzTargetAmazonAthenaGetTableMetadataHandler,
  XAmzTargetAmazonAthenaGetWorkGroupHandler,
  XAmzTargetAmazonAthenaImportNotebookHandler,
  XAmzTargetAmazonAthenaListApplicationDPUSizesHandler,
  XAmzTargetAmazonAthenaListCalculationExecutionsHandler,
  XAmzTargetAmazonAthenaListCapacityReservationsHandler,
  XAmzTargetAmazonAthenaListDatabasesHandler,
  XAmzTargetAmazonAthenaListDataCatalogsHandler,
  XAmzTargetAmazonAthenaListEngineVersionsHandler,
  XAmzTargetAmazonAthenaListExecutorsHandler,
  XAmzTargetAmazonAthenaListNamedQueriesHandler,
  XAmzTargetAmazonAthenaListNotebookMetadataHandler,
  XAmzTargetAmazonAthenaListNotebookSessionsHandler,
  XAmzTargetAmazonAthenaListPreparedStatementsHandler,
  XAmzTargetAmazonAthenaListQueryExecutionsHandler,
  XAmzTargetAmazonAthenaListSessionsHandler,
  XAmzTargetAmazonAthenaListTableMetadataHandler,
  XAmzTargetAmazonAthenaListTagsForResourceHandler,
  XAmzTargetAmazonAthenaListWorkGroupsHandler,
  XAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationHandler,
  XAmzTargetAmazonAthenaStartCalculationExecutionHandler,
  XAmzTargetAmazonAthenaStartQueryExecutionHandler,
  XAmzTargetAmazonAthenaStartSessionHandler,
  XAmzTargetAmazonAthenaStopCalculationExecutionHandler,
  XAmzTargetAmazonAthenaStopQueryExecutionHandler,
  XAmzTargetAmazonAthenaTagResourceHandler,
  XAmzTargetAmazonAthenaTerminateSessionHandler,
  XAmzTargetAmazonAthenaUntagResourceHandler,
  XAmzTargetAmazonAthenaUpdateCapacityReservationHandler,
  XAmzTargetAmazonAthenaUpdateDataCatalogHandler,
  XAmzTargetAmazonAthenaUpdateNamedQueryHandler,
  XAmzTargetAmazonAthenaUpdateNotebookHandler,
  XAmzTargetAmazonAthenaUpdateNotebookMetadataHandler,
  XAmzTargetAmazonAthenaUpdatePreparedStatementHandler,
  XAmzTargetAmazonAthenaUpdateWorkGroupHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAmazonAthenaBatchGetNamedQueryHandler)
  .route('/', XAmzTargetAmazonAthenaBatchGetPreparedStatementHandler)
  .route('/', XAmzTargetAmazonAthenaBatchGetQueryExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaCancelCapacityReservationHandler)
  .route('/', XAmzTargetAmazonAthenaCreateCapacityReservationHandler)
  .route('/', XAmzTargetAmazonAthenaCreateDataCatalogHandler)
  .route('/', XAmzTargetAmazonAthenaCreateNamedQueryHandler)
  .route('/', XAmzTargetAmazonAthenaCreateNotebookHandler)
  .route('/', XAmzTargetAmazonAthenaCreatePreparedStatementHandler)
  .route('/', XAmzTargetAmazonAthenaCreatePresignedNotebookUrlHandler)
  .route('/', XAmzTargetAmazonAthenaCreateWorkGroupHandler)
  .route('/', XAmzTargetAmazonAthenaDeleteCapacityReservationHandler)
  .route('/', XAmzTargetAmazonAthenaDeleteDataCatalogHandler)
  .route('/', XAmzTargetAmazonAthenaDeleteNamedQueryHandler)
  .route('/', XAmzTargetAmazonAthenaDeleteNotebookHandler)
  .route('/', XAmzTargetAmazonAthenaDeletePreparedStatementHandler)
  .route('/', XAmzTargetAmazonAthenaDeleteWorkGroupHandler)
  .route('/', XAmzTargetAmazonAthenaExportNotebookHandler)
  .route('/', XAmzTargetAmazonAthenaGetCalculationExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaGetCalculationExecutionCodeHandler)
  .route('/', XAmzTargetAmazonAthenaGetCalculationExecutionStatusHandler)
  .route('/', XAmzTargetAmazonAthenaGetCapacityAssignmentConfigurationHandler)
  .route('/', XAmzTargetAmazonAthenaGetCapacityReservationHandler)
  .route('/', XAmzTargetAmazonAthenaGetDataCatalogHandler)
  .route('/', XAmzTargetAmazonAthenaGetDatabaseHandler)
  .route('/', XAmzTargetAmazonAthenaGetNamedQueryHandler)
  .route('/', XAmzTargetAmazonAthenaGetNotebookMetadataHandler)
  .route('/', XAmzTargetAmazonAthenaGetPreparedStatementHandler)
  .route('/', XAmzTargetAmazonAthenaGetQueryExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaGetQueryResultsHandler)
  .route('/', XAmzTargetAmazonAthenaGetQueryRuntimeStatisticsHandler)
  .route('/', XAmzTargetAmazonAthenaGetSessionHandler)
  .route('/', XAmzTargetAmazonAthenaGetSessionStatusHandler)
  .route('/', XAmzTargetAmazonAthenaGetTableMetadataHandler)
  .route('/', XAmzTargetAmazonAthenaGetWorkGroupHandler)
  .route('/', XAmzTargetAmazonAthenaImportNotebookHandler)
  .route('/', XAmzTargetAmazonAthenaListApplicationDPUSizesHandler)
  .route('/', XAmzTargetAmazonAthenaListCalculationExecutionsHandler)
  .route('/', XAmzTargetAmazonAthenaListCapacityReservationsHandler)
  .route('/', XAmzTargetAmazonAthenaListDataCatalogsHandler)
  .route('/', XAmzTargetAmazonAthenaListDatabasesHandler)
  .route('/', XAmzTargetAmazonAthenaListEngineVersionsHandler)
  .route('/', XAmzTargetAmazonAthenaListExecutorsHandler)
  .route('/', XAmzTargetAmazonAthenaListNamedQueriesHandler)
  .route('/', XAmzTargetAmazonAthenaListNotebookMetadataHandler)
  .route('/', XAmzTargetAmazonAthenaListNotebookSessionsHandler)
  .route('/', XAmzTargetAmazonAthenaListPreparedStatementsHandler)
  .route('/', XAmzTargetAmazonAthenaListQueryExecutionsHandler)
  .route('/', XAmzTargetAmazonAthenaListSessionsHandler)
  .route('/', XAmzTargetAmazonAthenaListTableMetadataHandler)
  .route('/', XAmzTargetAmazonAthenaListTagsForResourceHandler)
  .route('/', XAmzTargetAmazonAthenaListWorkGroupsHandler)
  .route('/', XAmzTargetAmazonAthenaPutCapacityAssignmentConfigurationHandler)
  .route('/', XAmzTargetAmazonAthenaStartCalculationExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaStartQueryExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaStartSessionHandler)
  .route('/', XAmzTargetAmazonAthenaStopCalculationExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaStopQueryExecutionHandler)
  .route('/', XAmzTargetAmazonAthenaTagResourceHandler)
  .route('/', XAmzTargetAmazonAthenaTerminateSessionHandler)
  .route('/', XAmzTargetAmazonAthenaUntagResourceHandler)
  .route('/', XAmzTargetAmazonAthenaUpdateCapacityReservationHandler)
  .route('/', XAmzTargetAmazonAthenaUpdateDataCatalogHandler)
  .route('/', XAmzTargetAmazonAthenaUpdateNamedQueryHandler)
  .route('/', XAmzTargetAmazonAthenaUpdateNotebookHandler)
  .route('/', XAmzTargetAmazonAthenaUpdateNotebookMetadataHandler)
  .route('/', XAmzTargetAmazonAthenaUpdatePreparedStatementHandler)
  .route('/', XAmzTargetAmazonAthenaUpdateWorkGroupHandler)

export default app
