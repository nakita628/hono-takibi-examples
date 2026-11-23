import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetHealthLakeCreateFHIRDatastore(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.CreateFHIRDatastore'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeDeleteFHIRDatastore(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.DeleteFHIRDatastore'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeDescribeFHIRDatastore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.DescribeFHIRDatastore'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeDescribeFHIRExportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.DescribeFHIRExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeDescribeFHIRImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.DescribeFHIRImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeListFHIRDatastores(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.ListFHIRDatastores'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeListFHIRExportJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.ListFHIRExportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeListFHIRImportJobs(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.ListFHIRImportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeStartFHIRExportJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.StartFHIRExportJob'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeStartFHIRImportJob(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=HealthLake.StartFHIRImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetHealthLakeTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=HealthLake.TagResource'].$post(args, options))
}

export async function postXAmzTargetHealthLakeUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=HealthLake.UntagResource'].$post(args, options))
}
