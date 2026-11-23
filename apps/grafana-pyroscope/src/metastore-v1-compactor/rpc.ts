import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postMetastoreV1CompactionServiceDeleteDatasets(
  args: InferRequestType<
    (typeof client)['metastore.v1.CompactionService']['DeleteDatasets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metastore.v1.CompactionService'].DeleteDatasets.$post(args, options),
  )
}

export async function postMetastoreV1CompactionServiceListCompactionJobs(
  args: InferRequestType<
    (typeof client)['metastore.v1.CompactionService']['ListCompactionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metastore.v1.CompactionService'].ListCompactionJobs.$post(args, options),
  )
}

export async function postMetastoreV1CompactionServicePollCompactionJobs(
  args: InferRequestType<
    (typeof client)['metastore.v1.CompactionService']['PollCompactionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['metastore.v1.CompactionService'].PollCompactionJobs.$post(args, options),
  )
}
