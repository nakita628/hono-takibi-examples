import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113CreateCapacityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCapacityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113CreateCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113CreateService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateService'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113CreateTaskSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.CreateTaskSet'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSetting(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAccountSetting'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCapacityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCapacityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteService'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskDefinitions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteTaskSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeleteTaskSet'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterContainerInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterContainerInstance'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DeregisterTaskDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProviders(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeCapacityProviders'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeClusters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeClusters'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeContainerInstances'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeServices'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTaskSets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTaskSets'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DescribeTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113DiscoverPollEndpoint(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.DiscoverPollEndpoint'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommand(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ExecuteCommand'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.GetTaskProtection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAccountSettings'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListClusters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListClusters'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListContainerInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListContainerInstances'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServices'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListServicesByNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListServicesByNamespace'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTagsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamilies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitionFamilies'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTaskDefinitions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113ListTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.ListTasks'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSetting(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSetting'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingDefault(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAccountSettingDefault'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113PutAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutAttributes'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113PutClusterCapacityProviders(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.PutClusterCapacityProviders'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113RegisterContainerInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterContainerInstance'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RegisterTaskDefinition'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113RunTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.RunTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113StartTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StartTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113StopTask(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.StopTask'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitAttachmentStateChanges(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitAttachmentStateChanges'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitContainerStateChange(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitContainerStateChange'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113SubmitTaskStateChange(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.SubmitTaskStateChange'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCapacityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCapacityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateCluster(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateCluster'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateClusterSettings'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerAgent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerAgent'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateContainerInstancesState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateContainerInstancesState'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateService'].$post(args, options),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateServicePrimaryTaskSet'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskProtection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskProtection'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateTaskSet(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AmazonEC2ContainerServiceV20141113.UpdateTaskSet'].$post(args, options),
  )
}
