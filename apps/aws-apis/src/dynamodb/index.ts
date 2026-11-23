import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetDynamoDb20120810BatchExecuteStatementHandler,
  xAmzTargetDynamoDb20120810BatchGetItemHandler,
  xAmzTargetDynamoDb20120810BatchWriteItemHandler,
  xAmzTargetDynamoDb20120810CreateBackupHandler,
  xAmzTargetDynamoDb20120810CreateGlobalTableHandler,
  xAmzTargetDynamoDb20120810CreateTableHandler,
  xAmzTargetDynamoDb20120810DeleteBackupHandler,
  xAmzTargetDynamoDb20120810DeleteItemHandler,
  xAmzTargetDynamoDb20120810DeleteTableHandler,
  xAmzTargetDynamoDb20120810DescribeBackupHandler,
  xAmzTargetDynamoDb20120810DescribeContinuousBackupsHandler,
  xAmzTargetDynamoDb20120810DescribeContributorInsightsHandler,
  xAmzTargetDynamoDb20120810DescribeEndpointsHandler,
  xAmzTargetDynamoDb20120810DescribeExportHandler,
  xAmzTargetDynamoDb20120810DescribeGlobalTableHandler,
  xAmzTargetDynamoDb20120810DescribeGlobalTableSettingsHandler,
  xAmzTargetDynamoDb20120810DescribeImportHandler,
  xAmzTargetDynamoDb20120810DescribeKinesisStreamingDestinationHandler,
  xAmzTargetDynamoDb20120810DescribeLimitsHandler,
  xAmzTargetDynamoDb20120810DescribeTableHandler,
  xAmzTargetDynamoDb20120810DescribeTableReplicaAutoScalingHandler,
  xAmzTargetDynamoDb20120810DescribeTimeToLiveHandler,
  xAmzTargetDynamoDb20120810DisableKinesisStreamingDestinationHandler,
  xAmzTargetDynamoDb20120810EnableKinesisStreamingDestinationHandler,
  xAmzTargetDynamoDb20120810ExecuteStatementHandler,
  xAmzTargetDynamoDb20120810ExecuteTransactionHandler,
  xAmzTargetDynamoDb20120810ExportTableToPointInTimeHandler,
  xAmzTargetDynamoDb20120810GetItemHandler,
  xAmzTargetDynamoDb20120810ImportTableHandler,
  xAmzTargetDynamoDb20120810ListBackupsHandler,
  xAmzTargetDynamoDb20120810ListContributorInsightsHandler,
  xAmzTargetDynamoDb20120810ListExportsHandler,
  xAmzTargetDynamoDb20120810ListGlobalTablesHandler,
  xAmzTargetDynamoDb20120810ListImportsHandler,
  xAmzTargetDynamoDb20120810ListTablesHandler,
  xAmzTargetDynamoDb20120810ListTagsOfResourceHandler,
  xAmzTargetDynamoDb20120810PutItemHandler,
  xAmzTargetDynamoDb20120810QueryHandler,
  xAmzTargetDynamoDb20120810RestoreTableFromBackupHandler,
  xAmzTargetDynamoDb20120810RestoreTableToPointInTimeHandler,
  xAmzTargetDynamoDb20120810ScanHandler,
  xAmzTargetDynamoDb20120810TagResourceHandler,
  xAmzTargetDynamoDb20120810TransactGetItemsHandler,
  xAmzTargetDynamoDb20120810TransactWriteItemsHandler,
  xAmzTargetDynamoDb20120810UntagResourceHandler,
  xAmzTargetDynamoDb20120810UpdateContinuousBackupsHandler,
  xAmzTargetDynamoDb20120810UpdateContributorInsightsHandler,
  xAmzTargetDynamoDb20120810UpdateGlobalTableHandler,
  xAmzTargetDynamoDb20120810UpdateGlobalTableSettingsHandler,
  xAmzTargetDynamoDb20120810UpdateItemHandler,
  xAmzTargetDynamoDb20120810UpdateTableHandler,
  xAmzTargetDynamoDb20120810UpdateTableReplicaAutoScalingHandler,
  xAmzTargetDynamoDb20120810UpdateTimeToLiveHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetDynamoDb20120810BatchExecuteStatementHandler)
  .route('/', xAmzTargetDynamoDb20120810BatchGetItemHandler)
  .route('/', xAmzTargetDynamoDb20120810BatchWriteItemHandler)
  .route('/', xAmzTargetDynamoDb20120810CreateBackupHandler)
  .route('/', xAmzTargetDynamoDb20120810CreateGlobalTableHandler)
  .route('/', xAmzTargetDynamoDb20120810CreateTableHandler)
  .route('/', xAmzTargetDynamoDb20120810DeleteBackupHandler)
  .route('/', xAmzTargetDynamoDb20120810DeleteItemHandler)
  .route('/', xAmzTargetDynamoDb20120810DeleteTableHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeBackupHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeContinuousBackupsHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeContributorInsightsHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeEndpointsHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeExportHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeGlobalTableHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeGlobalTableSettingsHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeImportHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeKinesisStreamingDestinationHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeLimitsHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeTableHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeTableReplicaAutoScalingHandler)
  .route('/', xAmzTargetDynamoDb20120810DescribeTimeToLiveHandler)
  .route('/', xAmzTargetDynamoDb20120810DisableKinesisStreamingDestinationHandler)
  .route('/', xAmzTargetDynamoDb20120810EnableKinesisStreamingDestinationHandler)
  .route('/', xAmzTargetDynamoDb20120810ExecuteStatementHandler)
  .route('/', xAmzTargetDynamoDb20120810ExecuteTransactionHandler)
  .route('/', xAmzTargetDynamoDb20120810ExportTableToPointInTimeHandler)
  .route('/', xAmzTargetDynamoDb20120810GetItemHandler)
  .route('/', xAmzTargetDynamoDb20120810ImportTableHandler)
  .route('/', xAmzTargetDynamoDb20120810ListBackupsHandler)
  .route('/', xAmzTargetDynamoDb20120810ListContributorInsightsHandler)
  .route('/', xAmzTargetDynamoDb20120810ListExportsHandler)
  .route('/', xAmzTargetDynamoDb20120810ListGlobalTablesHandler)
  .route('/', xAmzTargetDynamoDb20120810ListImportsHandler)
  .route('/', xAmzTargetDynamoDb20120810ListTablesHandler)
  .route('/', xAmzTargetDynamoDb20120810ListTagsOfResourceHandler)
  .route('/', xAmzTargetDynamoDb20120810PutItemHandler)
  .route('/', xAmzTargetDynamoDb20120810QueryHandler)
  .route('/', xAmzTargetDynamoDb20120810RestoreTableFromBackupHandler)
  .route('/', xAmzTargetDynamoDb20120810RestoreTableToPointInTimeHandler)
  .route('/', xAmzTargetDynamoDb20120810ScanHandler)
  .route('/', xAmzTargetDynamoDb20120810TagResourceHandler)
  .route('/', xAmzTargetDynamoDb20120810TransactGetItemsHandler)
  .route('/', xAmzTargetDynamoDb20120810TransactWriteItemsHandler)
  .route('/', xAmzTargetDynamoDb20120810UntagResourceHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateContinuousBackupsHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateContributorInsightsHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateGlobalTableHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateGlobalTableSettingsHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateItemHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateTableHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateTableReplicaAutoScalingHandler)
  .route('/', xAmzTargetDynamoDb20120810UpdateTimeToLiveHandler)

export default app
