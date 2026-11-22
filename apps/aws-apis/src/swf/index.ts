import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsHandler,
  XAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsHandler,
  XAmzTargetSimpleWorkflowServiceCountPendingActivityTasksHandler,
  XAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksHandler,
  XAmzTargetSimpleWorkflowServiceDeprecateActivityTypeHandler,
  XAmzTargetSimpleWorkflowServiceDeprecateDomainHandler,
  XAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeHandler,
  XAmzTargetSimpleWorkflowServiceDescribeActivityTypeHandler,
  XAmzTargetSimpleWorkflowServiceDescribeDomainHandler,
  XAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionHandler,
  XAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeHandler,
  XAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryHandler,
  XAmzTargetSimpleWorkflowServiceListActivityTypesHandler,
  XAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsHandler,
  XAmzTargetSimpleWorkflowServiceListDomainsHandler,
  XAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsHandler,
  XAmzTargetSimpleWorkflowServiceListTagsForResourceHandler,
  XAmzTargetSimpleWorkflowServiceListWorkflowTypesHandler,
  XAmzTargetSimpleWorkflowServicePollForActivityTaskHandler,
  XAmzTargetSimpleWorkflowServicePollForDecisionTaskHandler,
  XAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatHandler,
  XAmzTargetSimpleWorkflowServiceRegisterActivityTypeHandler,
  XAmzTargetSimpleWorkflowServiceRegisterDomainHandler,
  XAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeHandler,
  XAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionHandler,
  XAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledHandler,
  XAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedHandler,
  XAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedHandler,
  XAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedHandler,
  XAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionHandler,
  XAmzTargetSimpleWorkflowServiceStartWorkflowExecutionHandler,
  XAmzTargetSimpleWorkflowServiceTagResourceHandler,
  XAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionHandler,
  XAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeHandler,
  XAmzTargetSimpleWorkflowServiceUndeprecateDomainHandler,
  XAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeHandler,
  XAmzTargetSimpleWorkflowServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceCountPendingActivityTasksHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDeprecateActivityTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDeprecateDomainHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDescribeActivityTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDescribeDomainHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceListActivityTypesHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceListDomainsHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceListTagsForResourceHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceListWorkflowTypesHandler)
  .route('/', XAmzTargetSimpleWorkflowServicePollForActivityTaskHandler)
  .route('/', XAmzTargetSimpleWorkflowServicePollForDecisionTaskHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRegisterActivityTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRegisterDomainHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceStartWorkflowExecutionHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceTagResourceHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceUndeprecateDomainHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeHandler)
  .route('/', XAmzTargetSimpleWorkflowServiceUntagResourceHandler)

export default app
