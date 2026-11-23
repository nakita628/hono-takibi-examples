import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getHealthz(options?: ClientRequestOptions) {
  return await parseResponse(client.healthz.$get(undefined, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.system.info.$get(undefined, options))
}

export async function postSystemAlert(
  args: InferRequestType<typeof client.system.alert.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.alert.$post(args, options))
}

export async function getSystemFunctions(options?: ClientRequestOptions) {
  return await parseResponse(client.system.functions.$get(undefined, options))
}

export async function putSystemFunctions(
  args: InferRequestType<typeof client.system.functions.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.functions.$put(args, options))
}

export async function postSystemFunctions(
  args: InferRequestType<typeof client.system.functions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.functions.$post(args, options))
}

export async function deleteSystemFunctions(
  args: InferRequestType<typeof client.system.functions.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.functions.$delete(args, options))
}

export async function postSystemScaleFunctionFunctionName(
  args: InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system['scale-function'][':functionName'].$post(args, options))
}

export async function getSystemFunctionFunctionName(
  args: InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.function[':functionName'].$get(args, options))
}

export async function getSystemSecrets(options?: ClientRequestOptions) {
  return await parseResponse(client.system.secrets.$get(undefined, options))
}

export async function putSystemSecrets(
  args: InferRequestType<typeof client.system.secrets.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.secrets.$put(args, options))
}

export async function postSystemSecrets(
  args: InferRequestType<typeof client.system.secrets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.secrets.$post(args, options))
}

export async function deleteSystemSecrets(
  args: InferRequestType<typeof client.system.secrets.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.secrets.$delete(args, options))
}

export async function getSystemLogs(
  args: InferRequestType<typeof client.system.logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.logs.$get(args, options))
}

export async function getSystemNamespaces(options?: ClientRequestOptions) {
  return await parseResponse(client.system.namespaces.$get(undefined, options))
}

export async function postAsyncFunctionFunctionName(
  args: InferRequestType<(typeof client)['async-function'][':functionName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['async-function'][':functionName'].$post(args, options))
}

export async function postAsyncFunctionFunctionNameNamespace(
  args: InferRequestType<(typeof client)['async-function'][':functionName.{namespace}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['async-function'][':functionName.{namespace}'].$post(args, options),
  )
}

export async function postFunctionFunctionName(
  args: InferRequestType<(typeof client.function)[':functionName']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.function[':functionName'].$post(args, options))
}

export async function postFunctionFunctionNameNamespace(
  args: InferRequestType<(typeof client.function)[':functionName.{namespace}']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.function[':functionName.{namespace}'].$post(args, options))
}
