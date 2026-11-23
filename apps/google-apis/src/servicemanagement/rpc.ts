import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Operations(
  args: InferRequestType<typeof client.v1.operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.operations.$get(args, options))
}

export async function getV1Services(
  args: InferRequestType<typeof client.v1.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services.$get(args, options))
}

export async function postV1Services(
  args: InferRequestType<typeof client.v1.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services.$post(args, options))
}

export async function getV1ServicesServiceName(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].$get(args, options))
}

export async function deleteV1ServicesServiceName(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].$delete(args, options))
}

export async function getV1ServicesServiceNameConfig(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].config.$get(args, options))
}

export async function getV1ServicesServiceNameConfigs(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].configs.$get(args, options))
}

export async function postV1ServicesServiceNameConfigs(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].configs.$post(args, options))
}

export async function getV1ServicesServiceNameConfigsConfigId(
  args: InferRequestType<
    (typeof client.v1.services)[':serviceName']['configs'][':configId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.services[':serviceName'].configs[':configId'].$get(args, options),
  )
}

export async function postV1ServicesServiceNameConfigsSubmit(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['configs:submit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.services[':serviceName']['configs:submit'].$post(args, options),
  )
}

export async function getV1ServicesServiceNameRollouts(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].rollouts.$get(args, options))
}

export async function postV1ServicesServiceNameRollouts(
  args: InferRequestType<(typeof client.v1.services)[':serviceName']['rollouts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName'].rollouts.$post(args, options))
}

export async function getV1ServicesServiceNameRolloutsRolloutId(
  args: InferRequestType<
    (typeof client.v1.services)[':serviceName']['rollouts'][':rolloutId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.services[':serviceName'].rollouts[':rolloutId'].$get(args, options),
  )
}

export async function postV1ServicesServiceNameUndelete(
  args: InferRequestType<(typeof client.v1.services)[':serviceName:undelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.services[':serviceName:undelete'].$post(args, options))
}

export async function postV1ServicesGenerateConfigReport(
  args: InferRequestType<(typeof client.v1)['services:generateConfigReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['services:generateConfigReport'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function postV1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:getIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:getIamPolicy'].$post(args, options))
}

export async function postV1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':resource:testIamPermissions'].$post(args, options))
}
