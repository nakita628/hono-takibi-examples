import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetIoTSecuredTunnelingCloseTunnel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.CloseTunnel'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingDescribeTunnel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.DescribeTunnel'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingListTunnels(
  args: InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.ListTunnels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.ListTunnels'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingOpenTunnel(
  args: InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.OpenTunnel'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingRotateTunnelAccessToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.RotateTunnelAccessToken'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=IoTSecuredTunneling.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetIoTSecuredTunnelingUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IoTSecuredTunneling.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IoTSecuredTunneling.UntagResource'].$post(args, options),
  )
}
