import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetAWSStepFunctionsCreateActivityHandler,
  XAmzTargetAWSStepFunctionsCreateStateMachineAliasHandler,
  XAmzTargetAWSStepFunctionsCreateStateMachineHandler,
  XAmzTargetAWSStepFunctionsDeleteActivityHandler,
  XAmzTargetAWSStepFunctionsDeleteStateMachineAliasHandler,
  XAmzTargetAWSStepFunctionsDeleteStateMachineHandler,
  XAmzTargetAWSStepFunctionsDeleteStateMachineVersionHandler,
  XAmzTargetAWSStepFunctionsDescribeActivityHandler,
  XAmzTargetAWSStepFunctionsDescribeExecutionHandler,
  XAmzTargetAWSStepFunctionsDescribeMapRunHandler,
  XAmzTargetAWSStepFunctionsDescribeStateMachineAliasHandler,
  XAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionHandler,
  XAmzTargetAWSStepFunctionsDescribeStateMachineHandler,
  XAmzTargetAWSStepFunctionsGetActivityTaskHandler,
  XAmzTargetAWSStepFunctionsGetExecutionHistoryHandler,
  XAmzTargetAWSStepFunctionsListActivitiesHandler,
  XAmzTargetAWSStepFunctionsListExecutionsHandler,
  XAmzTargetAWSStepFunctionsListMapRunsHandler,
  XAmzTargetAWSStepFunctionsListStateMachineAliasesHandler,
  XAmzTargetAWSStepFunctionsListStateMachinesHandler,
  XAmzTargetAWSStepFunctionsListStateMachineVersionsHandler,
  XAmzTargetAWSStepFunctionsListTagsForResourceHandler,
  XAmzTargetAWSStepFunctionsPublishStateMachineVersionHandler,
  XAmzTargetAWSStepFunctionsSendTaskFailureHandler,
  XAmzTargetAWSStepFunctionsSendTaskHeartbeatHandler,
  XAmzTargetAWSStepFunctionsSendTaskSuccessHandler,
  XAmzTargetAWSStepFunctionsStartExecutionHandler,
  XAmzTargetAWSStepFunctionsStartSyncExecutionHandler,
  XAmzTargetAWSStepFunctionsStopExecutionHandler,
  XAmzTargetAWSStepFunctionsTagResourceHandler,
  XAmzTargetAWSStepFunctionsUntagResourceHandler,
  XAmzTargetAWSStepFunctionsUpdateMapRunHandler,
  XAmzTargetAWSStepFunctionsUpdateStateMachineAliasHandler,
  XAmzTargetAWSStepFunctionsUpdateStateMachineHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetAWSStepFunctionsCreateActivityHandler)
  .route('/', XAmzTargetAWSStepFunctionsCreateStateMachineHandler)
  .route('/', XAmzTargetAWSStepFunctionsCreateStateMachineAliasHandler)
  .route('/', XAmzTargetAWSStepFunctionsDeleteActivityHandler)
  .route('/', XAmzTargetAWSStepFunctionsDeleteStateMachineHandler)
  .route('/', XAmzTargetAWSStepFunctionsDeleteStateMachineAliasHandler)
  .route('/', XAmzTargetAWSStepFunctionsDeleteStateMachineVersionHandler)
  .route('/', XAmzTargetAWSStepFunctionsDescribeActivityHandler)
  .route('/', XAmzTargetAWSStepFunctionsDescribeExecutionHandler)
  .route('/', XAmzTargetAWSStepFunctionsDescribeMapRunHandler)
  .route('/', XAmzTargetAWSStepFunctionsDescribeStateMachineHandler)
  .route('/', XAmzTargetAWSStepFunctionsDescribeStateMachineAliasHandler)
  .route('/', XAmzTargetAWSStepFunctionsDescribeStateMachineForExecutionHandler)
  .route('/', XAmzTargetAWSStepFunctionsGetActivityTaskHandler)
  .route('/', XAmzTargetAWSStepFunctionsGetExecutionHistoryHandler)
  .route('/', XAmzTargetAWSStepFunctionsListActivitiesHandler)
  .route('/', XAmzTargetAWSStepFunctionsListExecutionsHandler)
  .route('/', XAmzTargetAWSStepFunctionsListMapRunsHandler)
  .route('/', XAmzTargetAWSStepFunctionsListStateMachineAliasesHandler)
  .route('/', XAmzTargetAWSStepFunctionsListStateMachineVersionsHandler)
  .route('/', XAmzTargetAWSStepFunctionsListStateMachinesHandler)
  .route('/', XAmzTargetAWSStepFunctionsListTagsForResourceHandler)
  .route('/', XAmzTargetAWSStepFunctionsPublishStateMachineVersionHandler)
  .route('/', XAmzTargetAWSStepFunctionsSendTaskFailureHandler)
  .route('/', XAmzTargetAWSStepFunctionsSendTaskHeartbeatHandler)
  .route('/', XAmzTargetAWSStepFunctionsSendTaskSuccessHandler)
  .route('/', XAmzTargetAWSStepFunctionsStartExecutionHandler)
  .route('/', XAmzTargetAWSStepFunctionsStartSyncExecutionHandler)
  .route('/', XAmzTargetAWSStepFunctionsStopExecutionHandler)
  .route('/', XAmzTargetAWSStepFunctionsTagResourceHandler)
  .route('/', XAmzTargetAWSStepFunctionsUntagResourceHandler)
  .route('/', XAmzTargetAWSStepFunctionsUpdateMapRunHandler)
  .route('/', XAmzTargetAWSStepFunctionsUpdateStateMachineHandler)
  .route('/', XAmzTargetAWSStepFunctionsUpdateStateMachineAliasHandler)

export default app
