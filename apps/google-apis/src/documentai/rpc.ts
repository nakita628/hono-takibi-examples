import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1beta3HumanReviewConfigReviewDocument(
  args: InferRequestType<(typeof client.v1beta3)[':humanReviewConfig:reviewDocument']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta3[':humanReviewConfig:reviewDocument'].$post(args, options),
  )
}

export async function getV1beta3Name(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name'].$get(args, options))
}

export async function deleteV1beta3Name(
  args: InferRequestType<(typeof client.v1beta3)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name'].$delete(args, options))
}

export async function getV1beta3NameLocations(
  args: InferRequestType<(typeof client.v1beta3)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name'].locations.$get(args, options))
}

export async function postV1beta3NameBatchProcess(
  args: InferRequestType<(typeof client.v1beta3)[':name:batchProcess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:batchProcess'].$post(args, options))
}

export async function postV1beta3NameCancel(
  args: InferRequestType<(typeof client.v1beta3)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:cancel'].$post(args, options))
}

export async function postV1beta3NameDeploy(
  args: InferRequestType<(typeof client.v1beta3)[':name:deploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:deploy'].$post(args, options))
}

export async function postV1beta3NameDisable(
  args: InferRequestType<(typeof client.v1beta3)[':name:disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:disable'].$post(args, options))
}

export async function postV1beta3NameEnable(
  args: InferRequestType<(typeof client.v1beta3)[':name:enable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:enable'].$post(args, options))
}

export async function postV1beta3NameProcess(
  args: InferRequestType<(typeof client.v1beta3)[':name:process']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:process'].$post(args, options))
}

export async function postV1beta3NameUndeploy(
  args: InferRequestType<(typeof client.v1beta3)[':name:undeploy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':name:undeploy'].$post(args, options))
}

export async function getV1beta3ParentEvaluations(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['evaluations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':parent'].evaluations.$get(args, options))
}

export async function getV1beta3ParentProcessorTypes(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':parent'].processorTypes.$get(args, options))
}

export async function getV1beta3ParentProcessorVersions(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':parent'].processorVersions.$get(args, options))
}

export async function postV1beta3ParentProcessorVersionsImportProcessorVersion(
  args: InferRequestType<
    (typeof client.v1beta3)[':parent']['processorVersions:importProcessorVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta3[':parent']['processorVersions:importProcessorVersion'].$post(args, options),
  )
}

export async function postV1beta3ParentProcessorVersionsTrain(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processorVersions:train']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta3[':parent']['processorVersions:train'].$post(args, options),
  )
}

export async function getV1beta3ParentProcessors(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':parent'].processors.$get(args, options))
}

export async function postV1beta3ParentProcessors(
  args: InferRequestType<(typeof client.v1beta3)[':parent']['processors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':parent'].processors.$post(args, options))
}

export async function getV1beta3ParentFetchProcessorTypes(
  args: InferRequestType<(typeof client.v1beta3)[':parent:fetchProcessorTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta3[':parent:fetchProcessorTypes'].$get(args, options))
}

export async function postV1beta3ProcessorVersionEvaluateProcessorVersion(
  args: InferRequestType<
    (typeof client.v1beta3)[':processorVersion:evaluateProcessorVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta3[':processorVersion:evaluateProcessorVersion'].$post(args, options),
  )
}

export async function postV1beta3ProcessorSetDefaultProcessorVersion(
  args: InferRequestType<(typeof client.v1beta3)[':processor:setDefaultProcessorVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta3[':processor:setDefaultProcessorVersion'].$post(args, options),
  )
}
