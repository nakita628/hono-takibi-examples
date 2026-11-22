import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetDynamoDB20120810BatchExecuteStatementHandler,
  XAmzTargetDynamoDB20120810BatchGetItemHandler,
  XAmzTargetDynamoDB20120810BatchWriteItemHandler,
  XAmzTargetDynamoDB20120810CreateBackupHandler,
  XAmzTargetDynamoDB20120810CreateGlobalTableHandler,
  XAmzTargetDynamoDB20120810CreateTableHandler,
  XAmzTargetDynamoDB20120810DeleteBackupHandler,
  XAmzTargetDynamoDB20120810DeleteItemHandler,
  XAmzTargetDynamoDB20120810DeleteTableHandler,
  XAmzTargetDynamoDB20120810DescribeBackupHandler,
  XAmzTargetDynamoDB20120810DescribeContinuousBackupsHandler,
  XAmzTargetDynamoDB20120810DescribeContributorInsightsHandler,
  XAmzTargetDynamoDB20120810DescribeEndpointsHandler,
  XAmzTargetDynamoDB20120810DescribeExportHandler,
  XAmzTargetDynamoDB20120810DescribeGlobalTableHandler,
  XAmzTargetDynamoDB20120810DescribeGlobalTableSettingsHandler,
  XAmzTargetDynamoDB20120810DescribeImportHandler,
  XAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationHandler,
  XAmzTargetDynamoDB20120810DescribeLimitsHandler,
  XAmzTargetDynamoDB20120810DescribeTableHandler,
  XAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingHandler,
  XAmzTargetDynamoDB20120810DescribeTimeToLiveHandler,
  XAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationHandler,
  XAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationHandler,
  XAmzTargetDynamoDB20120810ExecuteStatementHandler,
  XAmzTargetDynamoDB20120810ExecuteTransactionHandler,
  XAmzTargetDynamoDB20120810ExportTableToPointInTimeHandler,
  XAmzTargetDynamoDB20120810GetItemHandler,
  XAmzTargetDynamoDB20120810ImportTableHandler,
  XAmzTargetDynamoDB20120810ListBackupsHandler,
  XAmzTargetDynamoDB20120810ListContributorInsightsHandler,
  XAmzTargetDynamoDB20120810ListExportsHandler,
  XAmzTargetDynamoDB20120810ListGlobalTablesHandler,
  XAmzTargetDynamoDB20120810ListImportsHandler,
  XAmzTargetDynamoDB20120810ListTablesHandler,
  XAmzTargetDynamoDB20120810ListTagsOfResourceHandler,
  XAmzTargetDynamoDB20120810PutItemHandler,
  XAmzTargetDynamoDB20120810QueryHandler,
  XAmzTargetDynamoDB20120810RestoreTableFromBackupHandler,
  XAmzTargetDynamoDB20120810RestoreTableToPointInTimeHandler,
  XAmzTargetDynamoDB20120810ScanHandler,
  XAmzTargetDynamoDB20120810TagResourceHandler,
  XAmzTargetDynamoDB20120810TransactGetItemsHandler,
  XAmzTargetDynamoDB20120810TransactWriteItemsHandler,
  XAmzTargetDynamoDB20120810UntagResourceHandler,
  XAmzTargetDynamoDB20120810UpdateContinuousBackupsHandler,
  XAmzTargetDynamoDB20120810UpdateContributorInsightsHandler,
  XAmzTargetDynamoDB20120810UpdateGlobalTableHandler,
  XAmzTargetDynamoDB20120810UpdateGlobalTableSettingsHandler,
  XAmzTargetDynamoDB20120810UpdateItemHandler,
  XAmzTargetDynamoDB20120810UpdateTableHandler,
  XAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingHandler,
  XAmzTargetDynamoDB20120810UpdateTimeToLiveHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetDynamoDB20120810BatchExecuteStatementHandler)
  .route('/', XAmzTargetDynamoDB20120810BatchGetItemHandler)
  .route('/', XAmzTargetDynamoDB20120810BatchWriteItemHandler)
  .route('/', XAmzTargetDynamoDB20120810CreateBackupHandler)
  .route('/', XAmzTargetDynamoDB20120810CreateGlobalTableHandler)
  .route('/', XAmzTargetDynamoDB20120810CreateTableHandler)
  .route('/', XAmzTargetDynamoDB20120810DeleteBackupHandler)
  .route('/', XAmzTargetDynamoDB20120810DeleteItemHandler)
  .route('/', XAmzTargetDynamoDB20120810DeleteTableHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeBackupHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeContinuousBackupsHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeContributorInsightsHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeEndpointsHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeExportHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeGlobalTableHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeGlobalTableSettingsHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeImportHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeKinesisStreamingDestinationHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeLimitsHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeTableHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeTableReplicaAutoScalingHandler)
  .route('/', XAmzTargetDynamoDB20120810DescribeTimeToLiveHandler)
  .route('/', XAmzTargetDynamoDB20120810DisableKinesisStreamingDestinationHandler)
  .route('/', XAmzTargetDynamoDB20120810EnableKinesisStreamingDestinationHandler)
  .route('/', XAmzTargetDynamoDB20120810ExecuteStatementHandler)
  .route('/', XAmzTargetDynamoDB20120810ExecuteTransactionHandler)
  .route('/', XAmzTargetDynamoDB20120810ExportTableToPointInTimeHandler)
  .route('/', XAmzTargetDynamoDB20120810GetItemHandler)
  .route('/', XAmzTargetDynamoDB20120810ImportTableHandler)
  .route('/', XAmzTargetDynamoDB20120810ListBackupsHandler)
  .route('/', XAmzTargetDynamoDB20120810ListContributorInsightsHandler)
  .route('/', XAmzTargetDynamoDB20120810ListExportsHandler)
  .route('/', XAmzTargetDynamoDB20120810ListGlobalTablesHandler)
  .route('/', XAmzTargetDynamoDB20120810ListImportsHandler)
  .route('/', XAmzTargetDynamoDB20120810ListTablesHandler)
  .route('/', XAmzTargetDynamoDB20120810ListTagsOfResourceHandler)
  .route('/', XAmzTargetDynamoDB20120810PutItemHandler)
  .route('/', XAmzTargetDynamoDB20120810QueryHandler)
  .route('/', XAmzTargetDynamoDB20120810RestoreTableFromBackupHandler)
  .route('/', XAmzTargetDynamoDB20120810RestoreTableToPointInTimeHandler)
  .route('/', XAmzTargetDynamoDB20120810ScanHandler)
  .route('/', XAmzTargetDynamoDB20120810TagResourceHandler)
  .route('/', XAmzTargetDynamoDB20120810TransactGetItemsHandler)
  .route('/', XAmzTargetDynamoDB20120810TransactWriteItemsHandler)
  .route('/', XAmzTargetDynamoDB20120810UntagResourceHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateContinuousBackupsHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateContributorInsightsHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateGlobalTableHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateGlobalTableSettingsHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateItemHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateTableHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateTableReplicaAutoScalingHandler)
  .route('/', XAmzTargetDynamoDB20120810UpdateTimeToLiveHandler)

export default app
