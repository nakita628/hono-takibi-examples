import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetRoute53AutoNamingV20170314CreateHttpNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.CreateHttpNamespace'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314CreatePrivateDnsNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePrivateDnsNamespace'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314CreatePublicDnsNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.CreatePublicDnsNamespace'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314CreateService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.CreateService'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314DeleteNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteNamespace'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314DeleteService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.DeleteService'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314DeregisterInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.DeregisterInstance'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314DiscoverInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.DiscoverInstances'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314GetInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstance'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314GetInstancesHealthStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.GetInstancesHealthStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314GetNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.GetNamespace'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314GetOperation(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.GetOperation'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314GetService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.GetService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.GetService'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314ListInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.ListInstances'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314ListNamespaces(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.ListNamespaces'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314ListOperations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.ListOperations'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314ListServices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.ListServices'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314RegisterInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.RegisterInstance'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314UpdateHttpNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateHttpNamespace'].$post(args, options),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314UpdateInstanceCustomHealthStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateInstanceCustomHealthStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314UpdatePrivateDnsNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePrivateDnsNamespace'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314UpdatePublicDnsNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdatePublicDnsNamespace'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetRoute53AutoNamingV20170314UpdateService(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Route53AutoNaming_v20170314.UpdateService'].$post(args, options),
  )
}
