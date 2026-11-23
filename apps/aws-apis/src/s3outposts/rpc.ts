import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postS3OutpostsCreateEndpoint(
  args: InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.S3Outposts.CreateEndpoint.$post(args, options))
}

export async function deleteS3OutpostsDeleteEndpointEndpointIdOutpostId(
  args: InferRequestType<
    (typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.S3Outposts['DeleteEndpoint#endpointId&outpostId'].$delete(args, options),
  )
}

export async function getS3OutpostsListEndpoints(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.S3Outposts.ListEndpoints.$get(args, options))
}

export async function getS3OutpostsListOutpostsWithS3(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.S3Outposts.ListOutpostsWithS3.$get(args, options))
}

export async function getS3OutpostsListSharedEndpointsOutpostId(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.S3Outposts['ListSharedEndpoints#outpostId'].$get(args, options))
}
