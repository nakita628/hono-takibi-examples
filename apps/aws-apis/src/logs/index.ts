import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetLogs20140328AssociateKmsKeyHandler,
  XAmzTargetLogs20140328CancelExportTaskHandler,
  XAmzTargetLogs20140328CreateExportTaskHandler,
  XAmzTargetLogs20140328CreateLogGroupHandler,
  XAmzTargetLogs20140328CreateLogStreamHandler,
  XAmzTargetLogs20140328DeleteAccountPolicyHandler,
  XAmzTargetLogs20140328DeleteDataProtectionPolicyHandler,
  XAmzTargetLogs20140328DeleteDestinationHandler,
  XAmzTargetLogs20140328DeleteLogGroupHandler,
  XAmzTargetLogs20140328DeleteLogStreamHandler,
  XAmzTargetLogs20140328DeleteMetricFilterHandler,
  XAmzTargetLogs20140328DeleteQueryDefinitionHandler,
  XAmzTargetLogs20140328DeleteResourcePolicyHandler,
  XAmzTargetLogs20140328DeleteRetentionPolicyHandler,
  XAmzTargetLogs20140328DeleteSubscriptionFilterHandler,
  XAmzTargetLogs20140328DescribeAccountPoliciesHandler,
  XAmzTargetLogs20140328DescribeDestinationsHandler,
  XAmzTargetLogs20140328DescribeExportTasksHandler,
  XAmzTargetLogs20140328DescribeLogGroupsHandler,
  XAmzTargetLogs20140328DescribeLogStreamsHandler,
  XAmzTargetLogs20140328DescribeMetricFiltersHandler,
  XAmzTargetLogs20140328DescribeQueriesHandler,
  XAmzTargetLogs20140328DescribeQueryDefinitionsHandler,
  XAmzTargetLogs20140328DescribeResourcePoliciesHandler,
  XAmzTargetLogs20140328DescribeSubscriptionFiltersHandler,
  XAmzTargetLogs20140328DisassociateKmsKeyHandler,
  XAmzTargetLogs20140328FilterLogEventsHandler,
  XAmzTargetLogs20140328GetDataProtectionPolicyHandler,
  XAmzTargetLogs20140328GetLogEventsHandler,
  XAmzTargetLogs20140328GetLogGroupFieldsHandler,
  XAmzTargetLogs20140328GetLogRecordHandler,
  XAmzTargetLogs20140328GetQueryResultsHandler,
  XAmzTargetLogs20140328ListTagsForResourceHandler,
  XAmzTargetLogs20140328ListTagsLogGroupHandler,
  XAmzTargetLogs20140328PutAccountPolicyHandler,
  XAmzTargetLogs20140328PutDataProtectionPolicyHandler,
  XAmzTargetLogs20140328PutDestinationHandler,
  XAmzTargetLogs20140328PutDestinationPolicyHandler,
  XAmzTargetLogs20140328PutLogEventsHandler,
  XAmzTargetLogs20140328PutMetricFilterHandler,
  XAmzTargetLogs20140328PutQueryDefinitionHandler,
  XAmzTargetLogs20140328PutResourcePolicyHandler,
  XAmzTargetLogs20140328PutRetentionPolicyHandler,
  XAmzTargetLogs20140328PutSubscriptionFilterHandler,
  XAmzTargetLogs20140328StartQueryHandler,
  XAmzTargetLogs20140328StopQueryHandler,
  XAmzTargetLogs20140328TagLogGroupHandler,
  XAmzTargetLogs20140328TagResourceHandler,
  XAmzTargetLogs20140328TestMetricFilterHandler,
  XAmzTargetLogs20140328UntagLogGroupHandler,
  XAmzTargetLogs20140328UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetLogs20140328AssociateKmsKeyHandler)
  .route('/', XAmzTargetLogs20140328CancelExportTaskHandler)
  .route('/', XAmzTargetLogs20140328CreateExportTaskHandler)
  .route('/', XAmzTargetLogs20140328CreateLogGroupHandler)
  .route('/', XAmzTargetLogs20140328CreateLogStreamHandler)
  .route('/', XAmzTargetLogs20140328DeleteAccountPolicyHandler)
  .route('/', XAmzTargetLogs20140328DeleteDataProtectionPolicyHandler)
  .route('/', XAmzTargetLogs20140328DeleteDestinationHandler)
  .route('/', XAmzTargetLogs20140328DeleteLogGroupHandler)
  .route('/', XAmzTargetLogs20140328DeleteLogStreamHandler)
  .route('/', XAmzTargetLogs20140328DeleteMetricFilterHandler)
  .route('/', XAmzTargetLogs20140328DeleteQueryDefinitionHandler)
  .route('/', XAmzTargetLogs20140328DeleteResourcePolicyHandler)
  .route('/', XAmzTargetLogs20140328DeleteRetentionPolicyHandler)
  .route('/', XAmzTargetLogs20140328DeleteSubscriptionFilterHandler)
  .route('/', XAmzTargetLogs20140328DescribeAccountPoliciesHandler)
  .route('/', XAmzTargetLogs20140328DescribeDestinationsHandler)
  .route('/', XAmzTargetLogs20140328DescribeExportTasksHandler)
  .route('/', XAmzTargetLogs20140328DescribeLogGroupsHandler)
  .route('/', XAmzTargetLogs20140328DescribeLogStreamsHandler)
  .route('/', XAmzTargetLogs20140328DescribeMetricFiltersHandler)
  .route('/', XAmzTargetLogs20140328DescribeQueriesHandler)
  .route('/', XAmzTargetLogs20140328DescribeQueryDefinitionsHandler)
  .route('/', XAmzTargetLogs20140328DescribeResourcePoliciesHandler)
  .route('/', XAmzTargetLogs20140328DescribeSubscriptionFiltersHandler)
  .route('/', XAmzTargetLogs20140328DisassociateKmsKeyHandler)
  .route('/', XAmzTargetLogs20140328FilterLogEventsHandler)
  .route('/', XAmzTargetLogs20140328GetDataProtectionPolicyHandler)
  .route('/', XAmzTargetLogs20140328GetLogEventsHandler)
  .route('/', XAmzTargetLogs20140328GetLogGroupFieldsHandler)
  .route('/', XAmzTargetLogs20140328GetLogRecordHandler)
  .route('/', XAmzTargetLogs20140328GetQueryResultsHandler)
  .route('/', XAmzTargetLogs20140328ListTagsForResourceHandler)
  .route('/', XAmzTargetLogs20140328ListTagsLogGroupHandler)
  .route('/', XAmzTargetLogs20140328PutAccountPolicyHandler)
  .route('/', XAmzTargetLogs20140328PutDataProtectionPolicyHandler)
  .route('/', XAmzTargetLogs20140328PutDestinationHandler)
  .route('/', XAmzTargetLogs20140328PutDestinationPolicyHandler)
  .route('/', XAmzTargetLogs20140328PutLogEventsHandler)
  .route('/', XAmzTargetLogs20140328PutMetricFilterHandler)
  .route('/', XAmzTargetLogs20140328PutQueryDefinitionHandler)
  .route('/', XAmzTargetLogs20140328PutResourcePolicyHandler)
  .route('/', XAmzTargetLogs20140328PutRetentionPolicyHandler)
  .route('/', XAmzTargetLogs20140328PutSubscriptionFilterHandler)
  .route('/', XAmzTargetLogs20140328StartQueryHandler)
  .route('/', XAmzTargetLogs20140328StopQueryHandler)
  .route('/', XAmzTargetLogs20140328TagLogGroupHandler)
  .route('/', XAmzTargetLogs20140328TagResourceHandler)
  .route('/', XAmzTargetLogs20140328TestMetricFilterHandler)
  .route('/', XAmzTargetLogs20140328UntagLogGroupHandler)
  .route('/', XAmzTargetLogs20140328UntagResourceHandler)

export default app
