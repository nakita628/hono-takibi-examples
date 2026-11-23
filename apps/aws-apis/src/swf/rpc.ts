import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetSimpleWorkflowServiceCountClosedWorkflowExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.CountClosedWorkflowExecutions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceCountOpenWorkflowExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.CountOpenWorkflowExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceCountPendingActivityTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.CountPendingActivityTasks'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceCountPendingDecisionTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.CountPendingDecisionTasks'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDeprecateActivityType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DeprecateActivityType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDeprecateDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DeprecateDomain'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDeprecateWorkflowType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DeprecateWorkflowType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDescribeActivityType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DescribeActivityType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDescribeDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DescribeDomain'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDescribeWorkflowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceDescribeWorkflowType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.DescribeWorkflowType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceGetWorkflowExecutionHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.GetWorkflowExecutionHistory'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceListActivityTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.ListActivityTypes'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceListClosedWorkflowExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.ListClosedWorkflowExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceListDomains(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListDomains']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.ListDomains'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceListOpenWorkflowExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.ListOpenWorkflowExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceListWorkflowTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.ListWorkflowTypes'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServicePollForActivityTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.PollForActivityTask'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServicePollForDecisionTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.PollForDecisionTask'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRecordActivityTaskHeartbeat(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RecordActivityTaskHeartbeat'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRegisterActivityType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RegisterActivityType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRegisterDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RegisterDomain'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRegisterWorkflowType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RegisterWorkflowType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRequestCancelWorkflowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RequestCancelWorkflowExecution'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCanceled(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCanceled'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRespondActivityTaskCompleted(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskCompleted'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRespondActivityTaskFailed(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RespondActivityTaskFailed'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceRespondDecisionTaskCompleted(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.RespondDecisionTaskCompleted'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceSignalWorkflowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.SignalWorkflowExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceStartWorkflowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.StartWorkflowExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceTerminateWorkflowExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.TerminateWorkflowExecution'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceUndeprecateActivityType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.UndeprecateActivityType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceUndeprecateDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.UndeprecateDomain'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceUndeprecateWorkflowType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.UndeprecateWorkflowType'].$post(args, options),
  )
}

export async function postXAmzTargetSimpleWorkflowServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=SimpleWorkflowService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=SimpleWorkflowService.UntagResource'].$post(args, options),
  )
}
