import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsHandler,
  xAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsHandler,
  xAmzTargetSimpleWorkflowServiceCountPendingActivityTasksHandler,
  xAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksHandler,
  xAmzTargetSimpleWorkflowServiceDeprecateActivityTypeHandler,
  xAmzTargetSimpleWorkflowServiceDeprecateDomainHandler,
  xAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeHandler,
  xAmzTargetSimpleWorkflowServiceDescribeActivityTypeHandler,
  xAmzTargetSimpleWorkflowServiceDescribeDomainHandler,
  xAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionHandler,
  xAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeHandler,
  xAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryHandler,
  xAmzTargetSimpleWorkflowServiceListActivityTypesHandler,
  xAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsHandler,
  xAmzTargetSimpleWorkflowServiceListDomainsHandler,
  xAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsHandler,
  xAmzTargetSimpleWorkflowServiceListTagsForResourceHandler,
  xAmzTargetSimpleWorkflowServiceListWorkflowTypesHandler,
  xAmzTargetSimpleWorkflowServicePollForActivityTaskHandler,
  xAmzTargetSimpleWorkflowServicePollForDecisionTaskHandler,
  xAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatHandler,
  xAmzTargetSimpleWorkflowServiceRegisterActivityTypeHandler,
  xAmzTargetSimpleWorkflowServiceRegisterDomainHandler,
  xAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeHandler,
  xAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionHandler,
  xAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledHandler,
  xAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedHandler,
  xAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedHandler,
  xAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedHandler,
  xAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionHandler,
  xAmzTargetSimpleWorkflowServiceStartWorkflowExecutionHandler,
  xAmzTargetSimpleWorkflowServiceTagResourceHandler,
  xAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionHandler,
  xAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeHandler,
  xAmzTargetSimpleWorkflowServiceUndeprecateDomainHandler,
  xAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeHandler,
  xAmzTargetSimpleWorkflowServiceUntagResourceHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutionsHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutionsHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceCountPendingActivityTasksHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceCountPendingDecisionTasksHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDeprecateActivityTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDeprecateDomainHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDeprecateWorkflowTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDescribeActivityTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDescribeDomainHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDescribeWorkflowExecutionHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceDescribeWorkflowTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistoryHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceListActivityTypesHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutionsHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceListDomainsHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutionsHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceListTagsForResourceHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceListWorkflowTypesHandler)
  .route('/', xAmzTargetSimpleWorkflowServicePollForActivityTaskHandler)
  .route('/', xAmzTargetSimpleWorkflowServicePollForDecisionTaskHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeatHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRegisterActivityTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRegisterDomainHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRegisterWorkflowTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecutionHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceledHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRespondActivityTaskCompletedHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRespondActivityTaskFailedHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompletedHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceSignalWorkflowExecutionHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceStartWorkflowExecutionHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceTagResourceHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceTerminateWorkflowExecutionHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceUndeprecateActivityTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceUndeprecateDomainHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceUndeprecateWorkflowTypeHandler)
  .route('/', xAmzTargetSimpleWorkflowServiceUntagResourceHandler)

export default app
