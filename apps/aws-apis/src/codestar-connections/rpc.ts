import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateConnection'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201CreateHost(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.CreateHost'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteConnection'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201DeleteHost(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.DeleteHost'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetConnection(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetConnection'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201GetHost(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.GetHost'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListConnections(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListConnections'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListHosts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListHosts'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.ListTagsForResource'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.TagResource'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UntagResource'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCodestarConnectionsCodeStarConnections20191201UpdateHost(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.codestar.connections.CodeStar_connections_20191201.UpdateHost'
    ].$post(args, options),
  )
}
