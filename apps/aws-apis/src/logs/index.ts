import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetLogs20140328AssociateKmsKeyHandler,
  xAmzTargetLogs20140328CancelExportTaskHandler,
  xAmzTargetLogs20140328CreateExportTaskHandler,
  xAmzTargetLogs20140328CreateLogGroupHandler,
  xAmzTargetLogs20140328CreateLogStreamHandler,
  xAmzTargetLogs20140328DeleteAccountPolicyHandler,
  xAmzTargetLogs20140328DeleteDataProtectionPolicyHandler,
  xAmzTargetLogs20140328DeleteDestinationHandler,
  xAmzTargetLogs20140328DeleteLogGroupHandler,
  xAmzTargetLogs20140328DeleteLogStreamHandler,
  xAmzTargetLogs20140328DeleteMetricFilterHandler,
  xAmzTargetLogs20140328DeleteQueryDefinitionHandler,
  xAmzTargetLogs20140328DeleteResourcePolicyHandler,
  xAmzTargetLogs20140328DeleteRetentionPolicyHandler,
  xAmzTargetLogs20140328DeleteSubscriptionFilterHandler,
  xAmzTargetLogs20140328DescribeAccountPoliciesHandler,
  xAmzTargetLogs20140328DescribeDestinationsHandler,
  xAmzTargetLogs20140328DescribeExportTasksHandler,
  xAmzTargetLogs20140328DescribeLogGroupsHandler,
  xAmzTargetLogs20140328DescribeLogStreamsHandler,
  xAmzTargetLogs20140328DescribeMetricFiltersHandler,
  xAmzTargetLogs20140328DescribeQueriesHandler,
  xAmzTargetLogs20140328DescribeQueryDefinitionsHandler,
  xAmzTargetLogs20140328DescribeResourcePoliciesHandler,
  xAmzTargetLogs20140328DescribeSubscriptionFiltersHandler,
  xAmzTargetLogs20140328DisassociateKmsKeyHandler,
  xAmzTargetLogs20140328FilterLogEventsHandler,
  xAmzTargetLogs20140328GetDataProtectionPolicyHandler,
  xAmzTargetLogs20140328GetLogEventsHandler,
  xAmzTargetLogs20140328GetLogGroupFieldsHandler,
  xAmzTargetLogs20140328GetLogRecordHandler,
  xAmzTargetLogs20140328GetQueryResultsHandler,
  xAmzTargetLogs20140328ListTagsForResourceHandler,
  xAmzTargetLogs20140328ListTagsLogGroupHandler,
  xAmzTargetLogs20140328PutAccountPolicyHandler,
  xAmzTargetLogs20140328PutDataProtectionPolicyHandler,
  xAmzTargetLogs20140328PutDestinationHandler,
  xAmzTargetLogs20140328PutDestinationPolicyHandler,
  xAmzTargetLogs20140328PutLogEventsHandler,
  xAmzTargetLogs20140328PutMetricFilterHandler,
  xAmzTargetLogs20140328PutQueryDefinitionHandler,
  xAmzTargetLogs20140328PutResourcePolicyHandler,
  xAmzTargetLogs20140328PutRetentionPolicyHandler,
  xAmzTargetLogs20140328PutSubscriptionFilterHandler,
  xAmzTargetLogs20140328StartQueryHandler,
  xAmzTargetLogs20140328StopQueryHandler,
  xAmzTargetLogs20140328TagLogGroupHandler,
  xAmzTargetLogs20140328TagResourceHandler,
  xAmzTargetLogs20140328TestMetricFilterHandler,
  xAmzTargetLogs20140328UntagLogGroupHandler,
  xAmzTargetLogs20140328UntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetLogs20140328AssociateKmsKeyHandler)
  .route('/', xAmzTargetLogs20140328CancelExportTaskHandler)
  .route('/', xAmzTargetLogs20140328CreateExportTaskHandler)
  .route('/', xAmzTargetLogs20140328CreateLogGroupHandler)
  .route('/', xAmzTargetLogs20140328CreateLogStreamHandler)
  .route('/', xAmzTargetLogs20140328DeleteAccountPolicyHandler)
  .route('/', xAmzTargetLogs20140328DeleteDataProtectionPolicyHandler)
  .route('/', xAmzTargetLogs20140328DeleteDestinationHandler)
  .route('/', xAmzTargetLogs20140328DeleteLogGroupHandler)
  .route('/', xAmzTargetLogs20140328DeleteLogStreamHandler)
  .route('/', xAmzTargetLogs20140328DeleteMetricFilterHandler)
  .route('/', xAmzTargetLogs20140328DeleteQueryDefinitionHandler)
  .route('/', xAmzTargetLogs20140328DeleteResourcePolicyHandler)
  .route('/', xAmzTargetLogs20140328DeleteRetentionPolicyHandler)
  .route('/', xAmzTargetLogs20140328DeleteSubscriptionFilterHandler)
  .route('/', xAmzTargetLogs20140328DescribeAccountPoliciesHandler)
  .route('/', xAmzTargetLogs20140328DescribeDestinationsHandler)
  .route('/', xAmzTargetLogs20140328DescribeExportTasksHandler)
  .route('/', xAmzTargetLogs20140328DescribeLogGroupsHandler)
  .route('/', xAmzTargetLogs20140328DescribeLogStreamsHandler)
  .route('/', xAmzTargetLogs20140328DescribeMetricFiltersHandler)
  .route('/', xAmzTargetLogs20140328DescribeQueriesHandler)
  .route('/', xAmzTargetLogs20140328DescribeQueryDefinitionsHandler)
  .route('/', xAmzTargetLogs20140328DescribeResourcePoliciesHandler)
  .route('/', xAmzTargetLogs20140328DescribeSubscriptionFiltersHandler)
  .route('/', xAmzTargetLogs20140328DisassociateKmsKeyHandler)
  .route('/', xAmzTargetLogs20140328FilterLogEventsHandler)
  .route('/', xAmzTargetLogs20140328GetDataProtectionPolicyHandler)
  .route('/', xAmzTargetLogs20140328GetLogEventsHandler)
  .route('/', xAmzTargetLogs20140328GetLogGroupFieldsHandler)
  .route('/', xAmzTargetLogs20140328GetLogRecordHandler)
  .route('/', xAmzTargetLogs20140328GetQueryResultsHandler)
  .route('/', xAmzTargetLogs20140328ListTagsForResourceHandler)
  .route('/', xAmzTargetLogs20140328ListTagsLogGroupHandler)
  .route('/', xAmzTargetLogs20140328PutAccountPolicyHandler)
  .route('/', xAmzTargetLogs20140328PutDataProtectionPolicyHandler)
  .route('/', xAmzTargetLogs20140328PutDestinationHandler)
  .route('/', xAmzTargetLogs20140328PutDestinationPolicyHandler)
  .route('/', xAmzTargetLogs20140328PutLogEventsHandler)
  .route('/', xAmzTargetLogs20140328PutMetricFilterHandler)
  .route('/', xAmzTargetLogs20140328PutQueryDefinitionHandler)
  .route('/', xAmzTargetLogs20140328PutResourcePolicyHandler)
  .route('/', xAmzTargetLogs20140328PutRetentionPolicyHandler)
  .route('/', xAmzTargetLogs20140328PutSubscriptionFilterHandler)
  .route('/', xAmzTargetLogs20140328StartQueryHandler)
  .route('/', xAmzTargetLogs20140328StopQueryHandler)
  .route('/', xAmzTargetLogs20140328TagLogGroupHandler)
  .route('/', xAmzTargetLogs20140328TagResourceHandler)
  .route('/', xAmzTargetLogs20140328TestMetricFilterHandler)
  .route('/', xAmzTargetLogs20140328UntagLogGroupHandler)
  .route('/', xAmzTargetLogs20140328UntagResourceHandler)

export default app
