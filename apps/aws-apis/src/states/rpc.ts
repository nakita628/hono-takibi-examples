import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSStepFunctionsCreateActivity(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.CreateActivity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.CreateActivity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsCreateStateMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.CreateStateMachine'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsCreateStateMachineAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.CreateStateMachineAlias'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDeleteActivity(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteActivity']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DeleteActivity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDeleteStateMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachine'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDeleteStateMachineAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineAlias'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDeleteStateMachineVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DeleteStateMachineVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDescribeActivity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeActivity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DescribeActivity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDescribeExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DescribeExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDescribeMapRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeMapRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DescribeMapRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDescribeStateMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachine'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDescribeStateMachineAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineAlias'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsDescribeStateMachineForExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.DescribeStateMachineForExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsGetActivityTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.GetActivityTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.GetActivityTask'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsGetExecutionHistory(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.GetExecutionHistory'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListActivities(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListActivities']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListActivities'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListExecutions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListExecutions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListMapRuns(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.ListMapRuns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListMapRuns'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListStateMachineAliases(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListStateMachineAliases'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListStateMachineVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListStateMachineVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListStateMachines(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.ListStateMachines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListStateMachines'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsPublishStateMachineVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.PublishStateMachineVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsSendTaskFailure(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskFailure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.SendTaskFailure'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsSendTaskHeartbeat(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.SendTaskHeartbeat'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsSendTaskSuccess(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.SendTaskSuccess'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsStartExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StartExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.StartExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsStartSyncExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.StartSyncExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.StartSyncExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsStopExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.StopExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.StopExecution'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsUpdateMapRun(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateMapRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.UpdateMapRun'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsUpdateStateMachine(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.UpdateStateMachine'].$post(args, options),
  )
}

export async function postXAmzTargetAWSStepFunctionsUpdateStateMachineAlias(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSStepFunctions.UpdateStateMachineAlias'].$post(args, options),
  )
}
