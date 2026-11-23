import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetGlobalAcceleratorV20180706AddCustomRoutingEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.AddCustomRoutingEndpoints'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706AddEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.AddEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706AdvertiseByoipCidr(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.AdvertiseByoipCidr'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706AllowCustomRoutingTraffic(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.AllowCustomRoutingTraffic'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706CreateAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateAccelerator'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingAccelerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingEndpointGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706CreateCustomRoutingListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateCustomRoutingListener'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706CreateEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateEndpointGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706CreateListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.CreateListener'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeleteAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteAccelerator'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingAccelerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingEndpointGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeleteCustomRoutingListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteCustomRoutingListener'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeleteEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteEndpointGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeleteListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeleteListener'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DenyCustomRoutingTraffic(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DenyCustomRoutingTraffic'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DeprovisionByoipCidr(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DeprovisionByoipCidr'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAccelerator'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeAcceleratorAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeAcceleratorAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAccelerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingAcceleratorAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingAcceleratorAttributes'
    ].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingEndpointGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeCustomRoutingListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeCustomRoutingListener'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeEndpointGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706DescribeListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.DescribeListener'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListAccelerators(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListAccelerators'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListByoipCidrs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListByoipCidrs'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingAccelerators(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingAccelerators'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingEndpointGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingEndpointGroups'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingListeners(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingListeners'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappings'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListCustomRoutingPortMappingsByDestination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=GlobalAccelerator_V20180706.ListCustomRoutingPortMappingsByDestination'
    ].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListEndpointGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListEndpointGroups'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListListeners(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListListeners'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706ProvisionByoipCidr(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.ProvisionByoipCidr'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706RemoveCustomRoutingEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveCustomRoutingEndpoints'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706RemoveEndpoints(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.RemoveEndpoints'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAccelerator'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateAcceleratorAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAccelerator(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAccelerator'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingAcceleratorAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingAcceleratorAttributes'
    ].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateCustomRoutingListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateCustomRoutingListener'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateEndpointGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateEndpointGroup'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706UpdateListener(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.UpdateListener'].$post(args, options),
  )
}

export async function postXAmzTargetGlobalAcceleratorV20180706WithdrawByoipCidr(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=GlobalAccelerator_V20180706.WithdrawByoipCidr'].$post(args, options),
  )
}
