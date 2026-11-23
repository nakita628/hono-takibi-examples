import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetAwsStepFunctionsCreateActivityHandler,
  xAmzTargetAwsStepFunctionsCreateStateMachineAliasHandler,
  xAmzTargetAwsStepFunctionsCreateStateMachineHandler,
  xAmzTargetAwsStepFunctionsDeleteActivityHandler,
  xAmzTargetAwsStepFunctionsDeleteStateMachineAliasHandler,
  xAmzTargetAwsStepFunctionsDeleteStateMachineHandler,
  xAmzTargetAwsStepFunctionsDeleteStateMachineVersionHandler,
  xAmzTargetAwsStepFunctionsDescribeActivityHandler,
  xAmzTargetAwsStepFunctionsDescribeExecutionHandler,
  xAmzTargetAwsStepFunctionsDescribeMapRunHandler,
  xAmzTargetAwsStepFunctionsDescribeStateMachineAliasHandler,
  xAmzTargetAwsStepFunctionsDescribeStateMachineForExecutionHandler,
  xAmzTargetAwsStepFunctionsDescribeStateMachineHandler,
  xAmzTargetAwsStepFunctionsGetActivityTaskHandler,
  xAmzTargetAwsStepFunctionsGetExecutionHistoryHandler,
  xAmzTargetAwsStepFunctionsListActivitiesHandler,
  xAmzTargetAwsStepFunctionsListExecutionsHandler,
  xAmzTargetAwsStepFunctionsListMapRunsHandler,
  xAmzTargetAwsStepFunctionsListStateMachineAliasesHandler,
  xAmzTargetAwsStepFunctionsListStateMachinesHandler,
  xAmzTargetAwsStepFunctionsListStateMachineVersionsHandler,
  xAmzTargetAwsStepFunctionsListTagsForResourceHandler,
  xAmzTargetAwsStepFunctionsPublishStateMachineVersionHandler,
  xAmzTargetAwsStepFunctionsSendTaskFailureHandler,
  xAmzTargetAwsStepFunctionsSendTaskHeartbeatHandler,
  xAmzTargetAwsStepFunctionsSendTaskSuccessHandler,
  xAmzTargetAwsStepFunctionsStartExecutionHandler,
  xAmzTargetAwsStepFunctionsStartSyncExecutionHandler,
  xAmzTargetAwsStepFunctionsStopExecutionHandler,
  xAmzTargetAwsStepFunctionsTagResourceHandler,
  xAmzTargetAwsStepFunctionsUntagResourceHandler,
  xAmzTargetAwsStepFunctionsUpdateMapRunHandler,
  xAmzTargetAwsStepFunctionsUpdateStateMachineAliasHandler,
  xAmzTargetAwsStepFunctionsUpdateStateMachineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetAwsStepFunctionsCreateActivityHandler)
  .route('/', xAmzTargetAwsStepFunctionsCreateStateMachineHandler)
  .route('/', xAmzTargetAwsStepFunctionsCreateStateMachineAliasHandler)
  .route('/', xAmzTargetAwsStepFunctionsDeleteActivityHandler)
  .route('/', xAmzTargetAwsStepFunctionsDeleteStateMachineHandler)
  .route('/', xAmzTargetAwsStepFunctionsDeleteStateMachineAliasHandler)
  .route('/', xAmzTargetAwsStepFunctionsDeleteStateMachineVersionHandler)
  .route('/', xAmzTargetAwsStepFunctionsDescribeActivityHandler)
  .route('/', xAmzTargetAwsStepFunctionsDescribeExecutionHandler)
  .route('/', xAmzTargetAwsStepFunctionsDescribeMapRunHandler)
  .route('/', xAmzTargetAwsStepFunctionsDescribeStateMachineHandler)
  .route('/', xAmzTargetAwsStepFunctionsDescribeStateMachineAliasHandler)
  .route('/', xAmzTargetAwsStepFunctionsDescribeStateMachineForExecutionHandler)
  .route('/', xAmzTargetAwsStepFunctionsGetActivityTaskHandler)
  .route('/', xAmzTargetAwsStepFunctionsGetExecutionHistoryHandler)
  .route('/', xAmzTargetAwsStepFunctionsListActivitiesHandler)
  .route('/', xAmzTargetAwsStepFunctionsListExecutionsHandler)
  .route('/', xAmzTargetAwsStepFunctionsListMapRunsHandler)
  .route('/', xAmzTargetAwsStepFunctionsListStateMachineAliasesHandler)
  .route('/', xAmzTargetAwsStepFunctionsListStateMachineVersionsHandler)
  .route('/', xAmzTargetAwsStepFunctionsListStateMachinesHandler)
  .route('/', xAmzTargetAwsStepFunctionsListTagsForResourceHandler)
  .route('/', xAmzTargetAwsStepFunctionsPublishStateMachineVersionHandler)
  .route('/', xAmzTargetAwsStepFunctionsSendTaskFailureHandler)
  .route('/', xAmzTargetAwsStepFunctionsSendTaskHeartbeatHandler)
  .route('/', xAmzTargetAwsStepFunctionsSendTaskSuccessHandler)
  .route('/', xAmzTargetAwsStepFunctionsStartExecutionHandler)
  .route('/', xAmzTargetAwsStepFunctionsStartSyncExecutionHandler)
  .route('/', xAmzTargetAwsStepFunctionsStopExecutionHandler)
  .route('/', xAmzTargetAwsStepFunctionsTagResourceHandler)
  .route('/', xAmzTargetAwsStepFunctionsUntagResourceHandler)
  .route('/', xAmzTargetAwsStepFunctionsUpdateMapRunHandler)
  .route('/', xAmzTargetAwsStepFunctionsUpdateStateMachineHandler)
  .route('/', xAmzTargetAwsStepFunctionsUpdateStateMachineAliasHandler)

export default app
