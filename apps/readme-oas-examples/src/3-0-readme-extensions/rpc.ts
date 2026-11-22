import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getXCodeSamples(options?: ClientRequestOptions) {
  return await parseResponse(client['x-code-samples'].$get(undefined, options))
}

export async function postXCodeSamples(
  args: InferRequestType<(typeof client)['x-code-samples']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['x-code-samples'].$post(args, options))
}

export async function postXHeaders(options?: ClientRequestOptions) {
  return await parseResponse(client['x-headers'].$post(undefined, options))
}

export async function patchXHeaders(options?: ClientRequestOptions) {
  return await parseResponse(client['x-headers'].$patch(undefined, options))
}

export async function postXExplorerEnabled(
  args: InferRequestType<(typeof client)['x-explorer-enabled']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['x-explorer-enabled'].$post(args, options))
}

export async function patchXExplorerEnabled(
  args: InferRequestType<(typeof client)['x-explorer-enabled']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['x-explorer-enabled'].$patch(args, options))
}

export async function getXSamplesLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client['x-samples-languages'].$get(undefined, options))
}

export async function postXSamplesLanguages(options?: ClientRequestOptions) {
  return await parseResponse(client['x-samples-languages'].$post(undefined, options))
}

export async function postXProxyEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client['x-proxy-enabled'].$post(undefined, options))
}

export async function patchXProxyEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client['x-proxy-enabled'].$patch(undefined, options))
}

export async function postXMetricsEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client['x-metrics-enabled'].$post(undefined, options))
}

export async function patchXMetricsEnabled(options?: ClientRequestOptions) {
  return await parseResponse(client['x-metrics-enabled'].$patch(undefined, options))
}
