import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetFmrsServiceCancelTaskExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CancelTaskExecution'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateAgent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.CreateAgent'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceCreateLocationEfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationEfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationFsxLustre(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationFsxLustre'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationFsxOntap(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationFsxOntap'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationFsxOpenZfs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationFsxWindows(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationFsxWindows'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationHdfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationHdfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationNfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationNfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationObjectStorage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationObjectStorage'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationS3(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationS3'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateLocationSmb(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.CreateLocationSmb'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceCreateTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.CreateTask'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceDeleteAgent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.DeleteAgent'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceDeleteLocation(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DeleteLocation'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDeleteTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.DeleteTask'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceDescribeAgent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.DescribeAgent'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceDescribeLocationEfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationEfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationFsxLustre(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationFsxOntap(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationFsxOpenZfs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationFsxWindows(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationHdfs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationHdfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationNfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationNfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationObjectStorage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationS3(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationS3'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeLocationSmb(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeLocationSmb'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceDescribeTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.DescribeTask'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceDescribeTaskExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.DescribeTaskExecution'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceListAgents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.ListAgents'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceListLocations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.ListLocations'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceListTaskExecutions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.ListTaskExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceListTasks(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.ListTasks'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceStartTaskExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.StartTaskExecution'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.TagResource'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.UntagResource'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceUpdateAgent(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.UpdateAgent'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceUpdateLocationHdfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.UpdateLocationHdfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceUpdateLocationNfs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.UpdateLocationNfs'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceUpdateLocationObjectStorage(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceUpdateLocationSmb(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.UpdateLocationSmb'].$post(args, options),
  )
}

export async function postXAmzTargetFmrsServiceUpdateTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=FmrsService.UpdateTask'].$post(args, options))
}

export async function postXAmzTargetFmrsServiceUpdateTaskExecution(
  args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=FmrsService.UpdateTaskExecution'].$post(args, options),
  )
}
